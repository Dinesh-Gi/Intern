import type { Request, Response } from "express";
export declare const createDamagedGoods: (req: Request, res: Response) => Promise<Response<any, Record<string, any>>>;
export declare const getAllDamagedGoods: (req: Request, res: Response) => Promise<Response<any, Record<string, any>>>;
export declare const getDamagedGoodsById: (req: Request, res: Response) => Promise<Response<any, Record<string, any>>>;
export declare const getDamagedGoodsByInventory: (req: Request, res: Response) => Promise<Response<any, Record<string, any>>>;
export declare const updateDamagedGoods: (req: Request, res: Response) => Promise<Response<any, Record<string, any>>>;
export declare const deactivateDamagedGoods: (req: Request, res: Response) => Promise<Response<any, Record<string, any>>>;
//# sourceMappingURL=DamageGoodsControllerf.d.ts.map