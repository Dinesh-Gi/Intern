import { Session } from "./TransactionsSession.js";
import { User } from "./TransactionsUser.js";
import { Discount } from "./TransactionsDiscount.js";
import { Bill } from "./TransactionsBill.js";
import { Inventory } from "./TransactionsInventory.js";
import { Product } from "./TransactionsProduct.js";
export declare class Store {
    store_id: number;
    gst_no: string;
    store_name: string;
    location: string | null;
    is_active: boolean;
    created_at: Date;
    created_by: number | null;
    updated_at: Date | null;
    updated_by: number | null;
    users: User[];
    discounts: Discount[];
    sessions: Session[];
    bills: Bill[];
    products: Product[];
    inventory: Inventory[];
}
//# sourceMappingURL=TransactionsStore.d.ts.map