import { DamagedGoods } from "../entity/TransactionsDamagedGoods.js";
import { Inventory } from "../entity/TransactionsInventory.js";
export declare const createDamagedGoodsService: (inventoryId: number, qty: number, reason: string, unitCost: number, userId: number, sessionId: number, storeId: number) => Promise<{
    inventory: Inventory;
    damage: DamagedGoods;
    audits: import("../entity/TransactionsAudit.js").Audit[];
}>;
export declare const getDamagedGoodsByIdService: (damageId: number) => Promise<DamagedGoods | null>;
export declare const getAllDamagedGoodsService: (storeId: number) => Promise<DamagedGoods[]>;
export declare const getAllDamagedGoodsHistoryService: () => Promise<DamagedGoods[]>;
export declare const getDamagedGoodsByInventoryService: (inventoryId: number, storeId: number) => Promise<DamagedGoods[]>;
export declare const updateDamagedGoodsService: (damageId: number, qty: number, reason: string, unitCost: number, userId: number, sessionId: number, storeId: number) => Promise<{
    inventory: Inventory;
    damage: DamagedGoods;
    audits: import("../entity/TransactionsAudit.js").Audit[];
}>;
export declare const deactivateDamagedGoodsService: (damageId: number, userId: number, sessionId: number, storeId: number) => Promise<{
    inventory: Inventory;
    damage: DamagedGoods;
    audits: import("../entity/TransactionsAudit.js").Audit[];
}>;
export declare const getDamagedGoodsByDateRangeService: (fromDate: Date, toDate: Date) => Promise<DamagedGoods[]>;
//# sourceMappingURL=DamageGoodsService.d.ts.map