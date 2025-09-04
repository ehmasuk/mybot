import prisma from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function GET(req) {
  try {
    const userId = req.nextUrl.searchParams.get("userId");
    if (!userId) {
      return NextResponse.json({ message: "User ID is required" }, { status: 400 });
    }

    // Find the bot for this user
    const user = await prisma.user.findUnique({ where: { id:userId } });

    if (!user) {
      return NextResponse.json({ message: "User not found" }, { status: 404 });
    }

    return NextResponse.json({ instruction: user.instruction || "" }, { status: 200 });
  } catch (err) {
    console.error(err);
    return NextResponse.json({ message: "Server Error" }, { status: 500 });
  }
}

export async function POST(req) {
  try {
    const { userId, instruction } = await req.json();

    if (!userId || instruction === undefined) {
      return NextResponse.json({ message: "User ID and instruction are required" }, { status: 400 });
    }

    // Find the user's bot
    const user = await prisma.user.findUnique({ where: { id:userId } });
    if (!user) {
      return NextResponse.json({ message: "User not found" }, { status: 404 });
    }

    // Update instruction
    await prisma.user.update({
      where: { id: userId },
      data: { instruction },
    });

    return NextResponse.json({ message: "Instruction updated successfully" }, { status: 200 });
  } catch (err) {
    console.error(err);
    return NextResponse.json({ message: "Server Error" }, { status: 500 });
  }
}
