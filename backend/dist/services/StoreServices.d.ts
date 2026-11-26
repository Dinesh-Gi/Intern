import { Store } from "../entity/TransactionsStore.js";
export interface StoreData {
    store_name: string;
    gst_no: string;
    location: string | null;
    is_active?: boolean;
}
export declare function listStoresForSignup(search?: string): Promise<{
    storeId: number;
    storeName: string;
    location: string | null;
    ownerUserId: number | null;
    ownerName: string | null;
}[]>;
export declare function getStores(): Promise<Store[]>;
export declare function getStoreById(storeId: number): Promise<Store>;
export declare function updateStore(storeId: number, data: Partial<StoreData>, userId: number, sessionId?: number): Promise<Store>;
export declare function closeStore(storeId: number, userId: number, sessionId?: number): Promise<Store>;
export declare const deleteStore: typeof closeStore;
export declare function restoreStore(storeId: number, userId: number, sessionId?: number): Promise<Store>;
//# sourceMappingURL=StoreServices.d.ts.map