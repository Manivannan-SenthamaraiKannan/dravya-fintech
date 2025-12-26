// lib/jwt.ts
const jwt = require("jsonwebtoken");


const JWT_SECRET = process.env.JWT_SECRET as string;
const JWT_EXPIRES_IN = process.env.JWT_EXPIRES_IN || "1h";

if (!JWT_SECRET) throw new Error("Missing JWT_SECRET");

export function signToken(payload: Record<string, any>) {
    return jwt.sign(payload, JWT_SECRET, { expiresIn: JWT_EXPIRES_IN });
}

export function verifyToken(token: string) {
    try {
        return jwt.verify(token, JWT_SECRET) as Record<string, any>;
    } catch (err) {
        return null;
    }
}
