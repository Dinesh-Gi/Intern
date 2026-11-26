import { Inventory } from "./TransactionsInventory.js";
import { MovementType } from "./MasterMovementType.js";
import { ReferenceType } from "./MasterReference.js";
export declare class StockMovement {
    movement_id: number;
    inventory_id: number;
    movement_type_id: number;
    quantity_change: number;
    reference_type_id: number;
    reference_id: number | null;
    is_active: boolean;
    created_at: Date;
    created_by: number | null;
    updated_at: Date | null;
    updated_by: number | null;
    inventory: Inventory;
    movementType: MovementType;
    referenceType: ReferenceType;
}
//# sourceMappingURL=TransactionsStockMovement.d.ts.map