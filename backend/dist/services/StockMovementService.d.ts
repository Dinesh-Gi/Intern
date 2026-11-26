import { Inventory } from "../entity/TransactionsInventory.js";
import { StockMovement } from "../entity/TransactionsStockMovement.js";
export type StockMovementData = {
    inventoryId: number;
    movementTypeId: number;
    quantityChange: number;
    referenceTypeCode: string;
    referenceId: number;
    userId: number;
    sessionId: number;
};
export declare const createStockMovementService: (data: StockMovementData) => Promise<{
    inventory: Inventory;
    movement: StockMovement;
    inventoryAudit: import("../entity/TransactionsAudit.js").Audit;
    movementAudit: import("../entity/TransactionsAudit.js").Audit;
}>;
export declare const stockInService: (inventoryId: number, movementTypeId: number, quantity: number, userId: number, sessionId: number, referenceTypeCode: string, referenceId: number) => Promise<{
    inventory: Inventory;
    movement: StockMovement;
    inventoryAudit: import("../entity/TransactionsAudit.js").Audit;
    movementAudit: import("../entity/TransactionsAudit.js").Audit;
}>;
export declare const stockOutService: (inventoryId: number, movementTypeId: number, quantity: number, userId: number, sessionId: number, referenceTypeCode: string, referenceId: number) => Promise<{
    inventory: Inventory;
    movement: StockMovement;
    inventoryAudit: import("../entity/TransactionsAudit.js").Audit;
    movementAudit: import("../entity/TransactionsAudit.js").Audit;
}>;
export declare const getStockMovementByIdService: (movementId: number) => Promise<StockMovement | null>;
export declare const getAllStockMovementsService: () => Promise<StockMovement[]>;
export declare const getAllStockMovementHistoryService: () => Promise<StockMovement[]>;
export declare const getInventoryMovementHistoryService: (inventoryId: number) => Promise<StockMovement[]>;
export declare const getMovementsByTypeService: (movementTypeId: number) => Promise<StockMovement[]>;
export declare const getMovementsByReferenceService: (referenceTypeCode: string, referenceId: number) => Promise<StockMovement[]>;
export declare const getMovementsByDateRangeService: (fromDate: Date, toDate: Date) => Promise<StockMovement[]>;
export declare const getInventoryMovementsByDateRangeService: (inventoryId: number, fromDate: Date, toDate: Date) => Promise<StockMovement[]>;
export declare const deleteStockMovementService: (movementId: number, userId: number, sessionId: number) => Promise<{
    inventory: Inventory;
    movement: StockMovement;
    inventoryAudit: import("../entity/TransactionsAudit.js").Audit;
    movementAudit: import("../entity/TransactionsAudit.js").Audit;
}>;
export declare const getCurrentStockService: (inventoryId: number) => Promise<{
    inventory_id: number;
    product_id: number;
    store_id: number;
    quantity: number;
} | null>;
//# sourceMappingURL=StockMovementService.d.ts.map