import { Inventory } from "./TransactionsInventory.js";
export declare class DamagedGoods {
    damage_id: number;
    inventory_id: number;
    qty: number;
    reason: string | null;
    unit_cost: number;
    loss_value: number;
    is_active: boolean;
    created_at: Date;
    created_by: number | null;
    updated_at: Date | null;
    updated_by: number | null;
    inventory: Inventory;
}
//# sourceMappingURL=TransactionsDamagedGoods.d.ts.map