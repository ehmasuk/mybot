import { GoogleGenerativeAIEmbeddings } from "@langchain/google-genai";
import { Pinecone } from "@pinecone-database/pinecone";
import crypto from "crypto";
import { RecursiveCharacterTextSplitter } from "langchain/text_splitter";
import { NextRequest, NextResponse } from "next/server";

interface SaveToPineconeRequestBody {
    content: string;
    userId: string;
}

// Function to generate unique IDs based on the chunk content
const generateId = (content: string): string => crypto.createHash("md5").update(content).digest("hex");

export const POST = async (req: NextRequest): Promise<NextResponse> => {
  try {
    const { content, userId }: SaveToPineconeRequestBody = await req.json();

    // Validate content
    if (!content || content.trim().length === 0 || !userId) {
      return NextResponse.json({ message: "Content and userId cannot be empty" }, { status: 400 });
    }

    // Initialize Pinecone
    const pinecone = new Pinecone({
      apiKey: process.env.PINECONE_API_KEY,
    });

    const embeddings = new GoogleGenerativeAIEmbeddings({
      apiKey: process.env.GEMINI_API_KEY,
      model: "text-embedding-004",
    });

    const pineconeIndex = pinecone.Index("mybot");

    // Split text into chunks
    const splitter = new RecursiveCharacterTextSplitter({
      chunkSize: 500,
      chunkOverlap: 50,
    });

    const chunks = await splitter.createDocuments([content.trim()]);

    // Generate embeddings and prepare vectors with consistent IDs
    const vectors = await Promise.all(
      chunks.map(async (chunk) => {
        const embedding = await embeddings.embedQuery(chunk.pageContent);
        const id = generateId(chunk.pageContent); // Generate a consistent ID
        return {
          id,
          values: embedding,
          metadata: {
            text: chunk.pageContent,
            timestamp: new Date().toISOString(),
          },
        };
      })
    );

    // Delete existing data in Pinecone
    try {
      await pineconeIndex.namespace(`user-${userId}`).deleteAll();
    } catch (error) {
      console.log("Cannot delete existing data in Pinecone");
    }

    // Batch upsert to handle 3MB limit
    const batchUpsert = async (vectors: any[], pineconeIndex: any) => {
      const batchSize = 100;
      for (let i = 0; i < vectors.length; i += batchSize) {
        const batch = vectors.slice(i, i + batchSize);
        await pineconeIndex.namespace(`user-${userId}`).upsert(batch);
      }
    };

    // Upsert in batches
    await batchUpsert(vectors, pineconeIndex);

    return NextResponse.json({ message: "Data successfully indexed in chunks!" }, { status: 201 });
  } catch (error: any) {
    console.error("Error indexing data:", error);
    return NextResponse.json({ message: "Internal server error" }, { status: 500 });
  }
};
