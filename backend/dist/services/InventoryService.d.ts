import { Inventory } from "../entity/TransactionsInventory.js";
export type InventoryData = Partial<Inventory> & {
    movement_type_id?: number;
    reference_type_code?: string;
    reference_id?: number;
    session_id?: number;
};
export declare const createInventoryService: (inventoryData: InventoryData, callerStoreId: number) => Promise<Inventory>;
export declare const getInventoryByStoreService: (storeId: number, productId?: number, productName?: string) => Promise<Inventory[]>;
export declare const getInventoryByIdService: (inventoryId: number) => Promise<Inventory | null>;
export declare const updatePricingService: (inventoryId: number, costPrice: number | null, sellingPrice: number, userId: number, callerStoreId: number, sessionId: number, ipAddress?: string | null) => Promise<Inventory | null>;
export declare const updateInventoryQuantityService: (inventoryId: number, quantityChange: number, movementTypeId: number, referenceTypeCode: string | undefined, referenceId: number | undefined, userId: number, callerStoreId: number, sessionId: number) => Promise<Inventory>;
export declare const deactivateInventoryService: (inventoryId: number, userId: number, callerStoreId: number, sessionId: number) => Promise<Inventory | null>;
//# sourceMappingURL=InventoryService.d.ts.map