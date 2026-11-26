import "dotenv/config";
export interface TokenPayload {
    userId: number;
    email: string;
    roleId: number;
    storeId: number;
    sessionId: number;
}
export declare function signToken(payload: TokenPayload): string;
export declare function verifyToken(token: string): TokenPayload;
//# sourceMappingURL=jwt.d.ts.map