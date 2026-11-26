import { Product } from "../entity/TransactionsProduct.js";
export declare const createProductService: (productData: Partial<Product> & {
    typeName?: string;
    brandName?: string;
    userId?: number;
    sessionId?: number;
    ipAddress?: string | null;
}, userId?: number, sessionId?: number, ipAddress?: string | null, callerStoreId?: number) => Promise<Product>;
export declare const getAllProductsService: (storeId?: number, productName?: string) => Promise<Product[]>;
export declare const getProductByIdService: (productId: number, callerStoreId?: number) => Promise<Product | null>;
export declare const updateProductService: (productId: number, productData: Partial<Product> & {
    userId?: number;
    sessionId?: number;
    ipAddress?: string | null;
}, userId?: number, sessionId?: number, ipAddress?: string | null, callerStoreId?: number) => Promise<Product | null>;
export declare const deleteProductService: (productId: number, userId?: number, sessionId?: number, ipAddress?: string | null, callerStoreId?: number) => Promise<Product | null>;
//# sourceMappingURL=ProductService.d.ts.map