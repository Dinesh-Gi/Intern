import { Store } from "./TransactionsStore.js";
import { Customer } from "./TransactionsCustomer.js";
import { Discount } from "./TransactionsDiscount.js";
import { BillItem } from "./TransactionsBillItem.js";
export declare class Bill {
    bill_id: number;
    invoice_number: string;
    store_id: number;
    customer_id: number;
    discount_id?: number | null;
    subtotal: number;
    bill_discount_total: number;
    tax_total: number;
    rounding_adjustment: number;
    grand_total: number;
    status: string;
    is_active: boolean;
    created_at: Date;
    created_by: number | null;
    updated_at: Date | null;
    updated_by: number | null;
    store: Store;
    customer: Customer;
    discount?: Discount;
    billItems: BillItem[];
}
//# sourceMappingURL=TransactionsBill.d.ts.map