import { Bill } from "./TransactionsBill.js";
export declare class Customer {
    customer_id: number;
    phone_no: string | null;
    is_active: boolean;
    created_at: Date;
    created_by: number | null;
    updated_at: Date | null;
    updated_by: number | null;
    bills: Bill[];
}
//# sourceMappingURL=TransactionsCustomer.d.ts.map