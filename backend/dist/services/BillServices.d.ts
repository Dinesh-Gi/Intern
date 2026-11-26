import { Bill } from "../entity/TransactionsBill.js";
export interface BillItemInput {
    inventory_id: number;
    qty: number;
}
export interface CreateBillInput {
    store_id: number;
    customer_id: number;
    items: BillItemInput[];
    discount_id?: number | null;
}
export interface BillHistoryFilters {
    date?: string;
    dateFrom?: string;
    dateTo?: string;
    invoiceNumber?: string;
    customerPhone?: string;
}
export declare function getBillItemsForBill(billId: number, callerStoreId: number): Promise<{
    billItemId: number;
    inventoryId: number;
    productId: number;
    productName: string;
    qty: number;
    unitPrice: number;
    lineTotal: number;
}[]>;
export declare const createBillService: (input: CreateBillInput, userId: number, sessionId: number, callerStoreId: number) => Promise<Bill | null>;
export declare const deleteBillService: (bill_id: number, userId: number, sessionId: number, callerStoreId: number) => Promise<Bill>;
export declare function getBillById(storeId: number, billId: number): Promise<Bill>;
export declare function getBillHistory(storeId: number, filters: BillHistoryFilters): Promise<Bill[]>;
//# sourceMappingURL=BillServices.d.ts.map