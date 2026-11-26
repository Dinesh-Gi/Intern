import { Bill } from "./TransactionsBill.js";
import { Inventory } from "./TransactionsInventory.js";
export declare class BillItem {
    bill_item_id: number;
    bill_id: number;
    inventory_id: number;
    product_name_snapshot: string;
    qty: number;
    unit_price: number;
    line_total: number;
    is_active: boolean;
    created_at: Date;
    created_by: number | null;
    updated_at: Date | null;
    updated_by: number | null;
    bill: Bill;
    inventory: Inventory;
}
//# sourceMappingURL=TransactionsBillItem.d.ts.map