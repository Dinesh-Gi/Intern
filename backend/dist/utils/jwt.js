import "dotenv/config";
import jwt from "jsonwebtoken";
if (process.env.NODE_ENV === "production" && !process.env.JWT_SECRET) {
    throw new Error("JWT_SECRET must be set via environment variable in production. Refusing to start with the default development secret.");
}
const JWT_SECRET = process.env.JWT_SECRET || "billapp_default_development_secret_key_2026";
const JWT_EXPIRE = Number(process.env.JWT_EXPIRES_IN) || 86400;
export function signToken(payload) {
    return jwt.sign(payload, JWT_SECRET, { expiresIn: JWT_EXPIRE });
}
export function verifyToken(token) {
    return jwt.verify(token, JWT_SECRET);
}
//# sourceMappingURL=jwt.js.map