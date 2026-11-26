import { Customer } from "../entity/TransactionsCustomer.js";
import { Bill } from "../entity/TransactionsBill.js";
export declare const createCustomerService: (phone_no: string | null, created_by: number) => Promise<Customer>;
export declare const getAllCustomersService: () => Promise<Customer[]>;
export declare const getActiveCustomersService: () => Promise<Customer[]>;
export declare const getCustomerByIdService: (customer_id: number) => Promise<Customer>;
export declare const getCustomerByPhoneService: (phone_no: string) => Promise<Customer>;
export declare const searchCustomersService: (search: string) => Promise<Customer[]>;
export declare const updateCustomerService: (customer_id: number, phone_no: string | null, updated_by: number) => Promise<Customer>;
export declare const deactivateCustomerService: (customer_id: number, updated_by: number) => Promise<Customer>;
export declare const activateCustomerService: (customer_id: number, updated_by: number) => Promise<Customer>;
export declare const getCustomerBillsService: (customer_id: number) => Promise<Bill[]>;
//# sourceMappingURL=CustomerServices.d.ts.map