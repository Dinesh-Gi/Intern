import type { Response } from "express";
export declare class AppError extends Error {
    statusCode: number;
    isOperational: boolean;
    constructor(message: string, statusCode?: number);
}
export declare class BadRequestError extends AppError {
    constructor(message?: string);
}
export declare class UnauthorizedError extends AppError {
    constructor(message?: string);
}
export declare class ForbiddenError extends AppError {
    constructor(message?: string);
}
export declare class NotFoundError extends AppError {
    constructor(message?: string);
}
export declare class ConflictError extends AppError {
    constructor(message?: string);
}
export declare function sendErrorResponse(res: Response, error: unknown, defaultStatus?: number): Response<any, Record<string, any>>;
//# sourceMappingURL=AppError.d.ts.map