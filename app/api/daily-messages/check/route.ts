import prisma from "@/lib/prisma";
import { NextResponse } from "next/server";

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

  const now = new Date();
  const lastMessageAt = user.lastMessageAt;
  let dailyMessages = user.dailyMessages;

  if (lastMessageAt) {
    const diff = now.getTime() - lastMessageAt.getTime();
    const diffHours = diff / (1000 * 60 * 60);

    if (diffHours > 24) {
      dailyMessages = 0;
      await prisma.user.update({
        where: { id: user.id },
        data: { dailyMessages: 0 },
      });
    }
  }

  return NextResponse.json({ dailyMessages });
}
