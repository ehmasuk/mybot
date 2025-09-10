import prisma from "@/lib/prisma";
import { NextRequest, NextResponse } from "next/server";

// GET: fetch conversation by conversationId
export async function GET(req: NextRequest): Promise<NextResponse> {
  try {
    const conversationId = req.nextUrl.searchParams.get("conversationId");
    if (!conversationId) {
      return NextResponse.json({ message: "Conversation ID is required" }, { status: 400 });
    }

    const conversation = await prisma.conversation.findUnique({
      where: { id: conversationId },
    });

    if (!conversation) {
      return NextResponse.json({ message: "Conversation not found" }, { status: 404 });
    }

    return NextResponse.json({ conversation }, { status: 200 });
  } catch (err: any) {
    console.error(err);
    return NextResponse.json({ message: "Server Error" }, { status: 500 });
  }
}

interface ConversationRequestBody {
    userId: string;
    conversationId?: string | null;
    messages: any[]; // You might want to define a more specific type for messages
}

// POST: save or update conversation by conversationId
export async function POST(req: NextRequest): Promise<NextResponse> {
  try {
    const { userId, conversationId = null, messages }: ConversationRequestBody = await req.json();

    if (!userId || !messages || !Array.isArray(messages)) {
      return NextResponse.json({ message: "userId, and messages array are required" }, { status: 400 });
    }

    if (conversationId == null) {
      let newConversation = await prisma.conversation.create({
        data: {
          userId,
          messages,
        },
      });
      return NextResponse.json({ message: "Conversation created successfully", conversationId: newConversation.id }, { status: 200 });
    }

    // Check if conversation exists
    let existingConversation = await prisma.conversation.findUnique({
      where: { id: conversationId },
    });

    if (!existingConversation) {
      // Create new conversation
      return NextResponse.json({ message: "Invalid converstaion id" }, { status: 500 });
    }
    // Update existing conversation
    const updatedConversation = await prisma.conversation.update({
      where: { id: conversationId },
      data: { messages },
    });
    return NextResponse.json({ message: "Conversation saved successfully", conversationId: updatedConversation.id }, { status: 200 });
  } catch (err: any) {
    console.error(err);
    return NextResponse.json({ message: "Server Error" }, { status: 500 });
  }
}
