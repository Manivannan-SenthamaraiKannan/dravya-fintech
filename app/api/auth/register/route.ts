import { NextResponse } from "next/server";
import { connectDB } from "@/lib/db";
import User from "@/models/User";
import bcrypt from "bcryptjs";
import { nanoid } from "nanoid";

export async function POST(req: Request) {
    try {
        await connectDB();
        const { mobileNumber, name, email, password } = await req.json();

        // Validate required fields
        if (!mobileNumber || !name || !email || !password) {
            return NextResponse.json({ error: "All fields are required" }, { status: 400 });
        }

        const userExists = await User.findOne({ email });
        if (userExists) {
            return NextResponse.json({ error: "User already exists" }, { status: 400 });
        }

        const hashed = await bcrypt.hash(password, 10);

        const userID = name.substring(0, 3).toUpperCase() + nanoid(6);

        const newUser = await User.create({ userID, mobileNumber, name, email, password: hashed });

        console.log("User created:", newUser);

        return NextResponse.json({
            message: "User registered successfully",
            user: { userID, id: newUser._id, email: newUser.email, name: newUser.name }
        }, { status: 201 });
    } catch (error) {
        console.error("Registration error:", error);
        return NextResponse.json({
            error: error instanceof Error ? error.message : "Error registering user"
        }, { status: 500 });
    }
}