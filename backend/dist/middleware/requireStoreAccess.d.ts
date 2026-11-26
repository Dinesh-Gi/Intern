import type { Request, Response, NextFunction } from "express";
export declare function requireStoreAccess(storeIdSource?: "params" | "body", fieldName?: string): (req: Request, res: Response, next: NextFunction) => void;
//# sourceMappingURL=requireStoreAccess.d.ts.map