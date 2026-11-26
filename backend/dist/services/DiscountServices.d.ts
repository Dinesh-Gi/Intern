import { Discount } from "../entity/TransactionsDiscount.js";
import { DiscountType } from "../entity/MasterDiscountType.js";
export interface DiscountInput {
    discount_name: string;
    discount_value: number;
    min_bill_amount: number;
    max_discount_amount: number | null;
    discount_from: Date;
    discount_to?: Date | null;
    description: string;
    store_id: number;
    discount_type_id: number;
}
export declare const createDiscountService: (data: DiscountInput, userId: number, sessionId: number) => Promise<Discount>;
export declare const getActiveDiscountsForStoreService: (store_id: number) => Promise<Discount[]>;
export declare const getDiscountByIdService: (discount_id: number) => Promise<Discount>;
export declare const getDiscountByNameForStore: (discount_name: string, store_id: number) => Promise<Discount>;
export declare const updateDiscountService: (discountId: number, data: Partial<DiscountInput>, userId: number, sessionId: number, callerStoreId?: number) => Promise<Discount | null>;
export declare const setDiscountActiveService: (discountId: number, is_active: boolean, userId: number, sessionId: number) => Promise<Discount>;
export declare const resolveDiscountAmount: (discount: Discount & {
    discountType: DiscountType;
}, subtotal: number) => Promise<number>;
export declare const getAllDiscountsForStoreService: (store_id: number, isActive?: boolean, search?: string) => Promise<Discount[]>;
//# sourceMappingURL=DiscountServices.d.ts.map