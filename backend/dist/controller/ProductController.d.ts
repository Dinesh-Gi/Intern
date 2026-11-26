import type { Request, Response } from "express";
export declare function createProductController(req: Request, res: Response): Promise<Response<any, Record<string, any>>>;
export declare const getAllProductsController: (req: Request, res: Response) => Promise<Response<any, Record<string, any>>>;
export declare const getProductByIdController: (req: Request, res: Response) => Promise<Response<any, Record<string, any>>>;
export declare const updateProductController: (req: Request, res: Response) => Promise<Response<any, Record<string, any>>>;
export declare const deleteProductController: (req: Request, res: Response) => Promise<Response<any, Record<string, any>>>;
//# sourceMappingURL=ProductController.d.ts.map