import prisma from "@/app/lib/prismadb";
import { NextResponse } from "next/server";
import bcrypt from "bcrypt";

export async function POST(request: Request) {
	try {
		const body = await request.json();

		const { username, email, password } = body;

		if (!username || !email || !password) {
			return new NextResponse("All fields are required", { status: 400 });
		}

		const hashedPassword = await bcrypt.hash(password, 12);

		const user = await prisma.user.create({
			data: {
				username: username,
				password: hashedPassword,
				email: email,
			},
		});

		return NextResponse.json(user);
	} catch (error) {
		return new NextResponse("Internal server error", { status: 500 });
	}
}
