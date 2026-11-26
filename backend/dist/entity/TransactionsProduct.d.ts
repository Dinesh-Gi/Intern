import { Store } from "./TransactionsStore.js";
import { Type } from "./MasterProductType.js";
import { Brand } from "./MasterProductBrand.js";
import { UoM } from "./MasterUoM.js";
import { Inventory } from "./TransactionsInventory.js";
export declare class Product {
    product_id: number;
    store_id: number;
    product_name: string;
    type_id: number;
    brand_id: number;
    unit_id: number;
    unit_quantity: number;
    is_active: boolean;
    created_at: Date;
    created_by: number | null;
    updated_at: Date | null;
    updated_by: number | null;
    store: Store;
    type: Type;
    brand: Brand;
    uom: UoM;
    inventory: Inventory;
}
//# sourceMappingURL=TransactionsProduct.d.ts.map