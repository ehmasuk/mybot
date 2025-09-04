import prisma from "@/lib/prisma";
import { Document } from "@langchain/core/documents";
import { AIMessage, HumanMessage } from "@langchain/core/messages";
import { ChatPromptTemplate, MessagesPlaceholder } from "@langchain/core/prompts";
import { ChatGoogleGenerativeAI, GoogleGenerativeAIEmbeddings } from "@langchain/google-genai";
import { Pinecone } from "@pinecone-database/pinecone";
import { createStuffDocumentsChain } from "langchain/chains/combine_documents";

import { NextResponse } from "next/server";

export const POST = async (req) => {
  try {
    const { userId, question, history } = await req.json();

    if (!userId || !question || !history) {
      return NextResponse.json({ message: "userId, question, history cannot be empty" }, { status: 400 });
    }

    // Find the user's bot
    const user = await prisma.user.findUnique({ where: { id:userId } });
    if (!user) {
      return NextResponse.json({ message: "User not found" }, { status: 404 });
    }

    const deafultInstructions = `You are a helpful. Always give clear, concise, and to-the-point answers based only on the given context. If the question cannot be answered with the available context, politely ask for clarification or more details.`;

    const instructions = user.instruction ? user.instruction + deafultInstructions :  deafultInstructions;

    // create model from gemini
    const model = new ChatGoogleGenerativeAI({
      model: "gemini-2.0-flash",
      maxOutputTokens: 2048,
      apiKey: process.env.GEMINI_API_KEY,
      verbose: true,
      temperature: 0,
    });

    // Initialize embedding model from gemini that we will use to generate embeddings for the user's question
    const embeddings = new GoogleGenerativeAIEmbeddings({
      apiKey: process.env.GEMINI_API_KEY,
      model: "text-embedding-004",
    });

    // Initialize Pinecone
    const pinecone = new Pinecone({
      apiKey: process.env.PINECONE_API_KEY,
    });

    const pineconeIndex = pinecone.Index("mybot");

    // Generate embedding for the user's question
    const questionEmbedding = await embeddings.embedQuery(question);

    const queryRequest = {
      vector: questionEmbedding,
      topK: 3,
      includeMetadata: true,
      includeValues: true,
    };

    const searchResults = await pineconeIndex.namespace(`user-${userId}`).query(queryRequest);

    // Format the retrieved data as context
    const contextData = searchResults.matches.map((match) => match.metadata.text).join("\n");

    // create a document from the context data
    const document1 = new Document({
      pageContent: contextData,
    });

    // create prompt
    const prompt = ChatPromptTemplate.fromMessages([["system", "{instructions} and Context: {context}."], new MessagesPlaceholder("history"), ["user", "{userQuestion}"]]);

    // create chain
    const chain = await createStuffDocumentsChain({
      llm: model,
      prompt,
    });

    // create a chat history with the last 5 entries
    const chatHistory = history.slice(-5).map((entry) => {
      if (entry.role === "human") {
        return new HumanMessage(entry.message);
      } else if (entry.role === "bot") {
        return new AIMessage(entry.message);
      }
    });

    const allDocs = [document1];

    const result = await chain.invoke({
      instructions: instructions,
      userQuestion: question,
      context: allDocs,
      history: chatHistory,
    });

    console.log("context data ======> " + contextData);
    console.log("instructions ======> " + instructions);
    console.log("bot answer ========> " + result);
    console.log("allDocs=======================>", allDocs);

    return NextResponse.json(result, { status: 200 });
  } catch (error) {
    console.log(error);
    return NextResponse.json(error, { status: 400 });
  }
};
