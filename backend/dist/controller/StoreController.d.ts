import type { Request, Response } from "express";
export declare function getStoresController(req: Request, res: Response): Promise<Response<any, Record<string, any>>>;
export declare function getStoresByIdController(req: Request, res: Response): Promise<Response<any, Record<string, any>>>;
export declare function updateStoreController(req: Request, res: Response): Promise<Response<any, Record<string, any>>>;
export declare function closeStoreController(req: Request, res: Response): Promise<Response<any, Record<string, any>>>;
export declare const deleteStoreController: typeof closeStoreController;
export declare function restoreStoreController(req: Request, res: Response): Promise<Response<any, Record<string, any>>>;
//# sourceMappingURL=StoreController.d.ts.map