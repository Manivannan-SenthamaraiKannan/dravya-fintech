import { NextResponse } from "next/server";
import { verifyToken } from "@/lib/auth";

export async function GET(req: Request) {
    const token = req.headers.get("cookie")?.replace("token=", "");

    const decoded = token ? verifyToken(token) : null;

    if (!decoded) {
        return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    return NextResponse.json({ user: decoded });
}
