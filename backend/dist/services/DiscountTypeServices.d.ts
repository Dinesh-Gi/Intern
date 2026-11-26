import { DiscountType } from "../entity/MasterDiscountType.js";
export interface DiscountTypeData {
    code: string;
    description: string;
    is_active?: boolean;
}
export declare function getDiscountTypes(): Promise<DiscountType[]>;
export declare function getDiscountTypeById(discountTypeId: number): Promise<DiscountType>;
export declare function getDiscountTypeByCode(code: string): Promise<DiscountType>;
export declare function createDiscountType(data: DiscountTypeData): Promise<DiscountType>;
export declare function updateDiscountType(discountTypeId: number, data: Partial<DiscountTypeData>): Promise<DiscountType>;
export declare function deactivateDiscountType(discountTypeId: number): Promise<DiscountType>;
export declare function activateDiscountType(discountTypeId: number): Promise<DiscountType>;
//# sourceMappingURL=DiscountTypeServices.d.ts.map