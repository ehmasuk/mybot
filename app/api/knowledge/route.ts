import prisma from "@/lib/prisma";
import axios from "axios";
import { NextRequest, NextResponse } from "next/server";

// GET: fetch existing knowledge for user
export async function GET(req: NextRequest): Promise<NextResponse> {
  try {
    const userId = req.nextUrl.searchParams.get("userId");
    if (!userId) {
      return NextResponse.json({ message: "User ID is required" }, { status: 400 });
    }

    const user = await prisma.user.findUnique({
      where: { id:userId }
    });

    if (!user) {
      return NextResponse.json({ message: "User not found" }, { status: 404 });
    }

    return NextResponse.json({ knowledge:user.knowledge }, { status: 200 });
  } catch (err: any) {
    console.error(err);
    return NextResponse.json({ message: "Server Error" }, { status: 500 });
  }
}

interface KnowledgeRequestBody {
    userId: string;
    knowledge: string;
}

// POST: update knowledge for user
export async function POST(req: NextRequest): Promise<NextResponse> {
  try {
    const { userId, knowledge }: KnowledgeRequestBody = await req.json();

    if (!userId || knowledge === undefined) {
      return NextResponse.json({ message: "User ID and knowledge are required" }, { status: 400 });
    }

    // add knowledge to pinecone
    const saveKnowledgeOnPinecone = await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/save-to-pinecone`, {
      userId,
      content: knowledge,
    });

    if (!saveKnowledgeOnPinecone) {
      return NextResponse.json({ message: "Can't save knowledge to vector database" }, { status: 400 });
    }

    // Update knowledge
    await prisma.user.update({
      where: { id: userId },
      data: { knowledge },
    });


    return NextResponse.json({ message: "Knowledge updated successfully" }, { status: 200 });
  } catch (err: any) {
    console.error(err);
    return NextResponse.json({ message: "Server Error" }, { status: 500 });
  }
}
