import { UoM } from "../entity/MasterUoM.js";
export declare const createUOMService: (uomData: Partial<UoM> & {
    userId?: number;
    storeId?: number;
    sessionId?: number;
}) => Promise<UoM>;
export declare const getAllUOMService: () => Promise<UoM[]>;
export declare const getUOMByIdService: (unit_id: number) => Promise<UoM>;
export declare const updateUOMService: (unit_id: number, uomData: Partial<UoM> & {
    userId?: number;
    storeId?: number;
    sessionId?: number;
}) => Promise<UoM>;
export declare const deleteUOMService: (unit_id: number, userData: {
    userId?: number;
    storeId?: number;
    sessionId?: number;
}) => Promise<{
    message: string;
    deletedUOM: UoM;
}>;
//# sourceMappingURL=UOMService.d.ts.map