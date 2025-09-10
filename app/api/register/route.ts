import prisma from "@/lib/prisma"; 
import { NextRequest, NextResponse } from "next/server";

interface RegisterRequestBody {
    name: string;
    email: string;
    password: string;
}

export async function POST(req: NextRequest): Promise<NextResponse> {
  try {
    const { name, email, password }: RegisterRequestBody = await req.json();

    if (!name || !email || !password) {
      return NextResponse.json(
        { message: "Name, email, and password are required" },
        { status: 400 }
      );
    }

    // Check if user exists
    const existingUser = await prisma.user.findUnique({ where: { email } });
    if (existingUser) {
      return NextResponse.json({ message: "Email already exists" }, { status: 400 });
    }

    // Create new user
    const newUser = await prisma.user.create({
      data: {
        name,
        email,
        password,
      },
    });


    return NextResponse.json(
      {
        message: "User created successfully",
        data: {
          id: newUser.id,
          name: newUser.name,
          email: newUser.email
        },
      },
      { status: 201 }
    );
  } catch (err: any) {
    console.error(err);
    return NextResponse.json({ message: "Server Error" }, { status: 500 });
  }
}
