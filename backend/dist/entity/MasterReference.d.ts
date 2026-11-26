import { StockMovement } from "./TransactionsStockMovement.js";
export declare class ReferenceType {
    reference_type_id: number;
    code: string;
    description: string | null;
    is_active: boolean;
    created_at: Date;
    updated_at: Date | null;
    stockMovements: StockMovement[];
}
//# sourceMappingURL=MasterReference.d.ts.map