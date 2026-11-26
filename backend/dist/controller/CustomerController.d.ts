import type { Request, Response } from "express";
export declare const createCustomer: (req: Request, res: Response) => Promise<Response<any, Record<string, any>> | undefined>;
export declare const getAllCustomers: (req: Request, res: Response) => Promise<Response<any, Record<string, any>> | undefined>;
export declare const getActiveCustomers: (req: Request, res: Response) => Promise<Response<any, Record<string, any>> | undefined>;
export declare const getCustomerById: (req: Request, res: Response) => Promise<Response<any, Record<string, any>> | undefined>;
export declare const getCustomerByPhone: (req: Request, res: Response) => Promise<Response<any, Record<string, any>> | undefined>;
export declare const searchCustomers: (req: Request, res: Response) => Promise<Response<any, Record<string, any>> | undefined>;
export declare const updateCustomer: (req: Request, res: Response) => Promise<Response<any, Record<string, any>> | undefined>;
export declare const deactivateCustomer: (req: Request, res: Response) => Promise<Response<any, Record<string, any>> | undefined>;
export declare const activateCustomer: (req: Request, res: Response) => Promise<Response<any, Record<string, any>> | undefined>;
export declare const getCustomerBills: (req: Request, res: Response) => Promise<Response<any, Record<string, any>> | undefined>;
//# sourceMappingURL=CustomerController.d.ts.map