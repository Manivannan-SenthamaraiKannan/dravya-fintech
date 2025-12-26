import { NextResponse } from "next/server";
import { connectDB } from "@/lib/db";
import User from "@/models/User";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

export async function POST(req: Request) {
    try {
        await connectDB();

        const { email, password } = await req.json();

        const user = await User.findOne({ email });
        if (!user) return NextResponse.json({ error: "User not found" }, { status: 400 });

        const valid = await bcrypt.compare(password, user.password);
        if (!valid) return NextResponse.json({ error: "Invalid password" }, { status: 400 });

        const token = jwt.sign(
            { id: user._id, email: user.email },
            process.env.JWT_SECRET!,
            { expiresIn: "1d" }
        );

        const response = NextResponse.json({ message: "Login successful" });

        response.cookies.set("token", token, { httpOnly: true });

        return response;
    } catch (e) {
        return NextResponse.json({ error: "Login failed" }, { status: 500 });
    }
}
