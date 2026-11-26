import { DiscountType } from "./MasterDiscountType.js";
import { Bill } from "./TransactionsBill.js";
import { Store } from "./TransactionsStore.js";
export declare class Discount {
    discount_id: number;
    store_id: number;
    discount_type_id: number;
    discount_name: string;
    discount_value: number;
    min_bill_amount: number;
    max_discount_amount: number | null;
    discount_from: Date;
    discount_to: Date | null;
    description: string;
    is_active: boolean;
    created_at: Date;
    created_by: number;
    updated_at: Date | null;
    updated_by: number | null;
    bills: Bill[];
    store: Store;
    discountType: DiscountType;
}
//# sourceMappingURL=TransactionsDiscount.d.ts.map