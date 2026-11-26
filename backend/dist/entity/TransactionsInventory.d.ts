import { Product } from "./TransactionsProduct.js";
import { Store } from "./TransactionsStore.js";
import { DamagedGoods } from "./TransactionsDamagedGoods.js";
import { StockMovement } from "./TransactionsStockMovement.js";
export declare class Inventory {
    inventory_id: number;
    product_id: number;
    store_id: number;
    qty: number;
    cost_price: number | null;
    selling_price: number;
    is_active: boolean;
    created_at: Date;
    created_by: number | null;
    updated_at: Date | null;
    updated_by: number | null;
    product: Product;
    store: Store;
    damagedGoods: DamagedGoods[];
    stockMovements: StockMovement[];
}
//# sourceMappingURL=TransactionsInventory.d.ts.map