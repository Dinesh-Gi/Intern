import type { Request, Response } from "express";
export declare const createAuditController: (req: Request, res: Response) => Promise<Response<any, Record<string, any>>>;
export declare const getAllAuditsController: (req: Request, res: Response) => Promise<Response<any, Record<string, any>>>;
export declare const getAuditByIdController: (req: Request, res: Response) => Promise<Response<any, Record<string, any>>>;
export declare const getAuditsByTableNameController: (req: Request, res: Response) => Promise<Response<any, Record<string, any>>>;
export declare const getAuditsByRecordIdController: (req: Request, res: Response) => Promise<Response<any, Record<string, any>>>;
export declare const getAuditsByTableAndRecordIdController: (req: Request, res: Response) => Promise<Response<any, Record<string, any>>>;
export declare const getAuditsByStoreController: (req: Request, res: Response) => Promise<Response<any, Record<string, any>>>;
export declare const getAuditsBySessionController: (req: Request, res: Response) => Promise<Response<any, Record<string, any>>>;
export declare const getAuditsByActionTypeController: (req: Request, res: Response) => Promise<Response<any, Record<string, any>>>;
//# sourceMappingURL=AuditController.d.ts.map