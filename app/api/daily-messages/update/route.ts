
import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";

export async function POST(req: Request) {
  const { userId } = await req.json();

  if (!userId) {
    return NextResponse.json({ error: "userId is required" }, { status: 400 });
  }

  const user = await prisma.user.findUnique({
    where: { id: userId },
  });

  if (!user) {
    return NextResponse.json({ error: "User not found" }, { status: 404 });
  }

  if (user.dailyMessages >= 5) {
    return NextResponse.json({ error: "Message limit exceeded" }, { status: 429 });
  }

  const updatedUser = await prisma.user.update({
    where: { id: user.id },
    data: {
      dailyMessages: {
        increment: 1,
      },
      lastMessageAt: new Date(),
    },
  });

  return NextResponse.json({ success: true, dailyMessages: updatedUser.dailyMessages });
}
