import { StockMovement } from "./TransactionsStockMovement.js";
export declare class MovementType {
    movement_type_id: number;
    code: string;
    description: string | null;
    is_active: boolean;
    created_at: Date;
    updated_at: Date | null;
    stockMovements: StockMovement[];
}
//# sourceMappingURL=MasterMovementType.d.ts.map