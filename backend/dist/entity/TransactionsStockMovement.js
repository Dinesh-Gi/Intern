var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn } from "typeorm";
import { Inventory } from "./TransactionsInventory.js";
import { MovementType } from "./MasterMovementType.js";
import { ReferenceType } from "./MasterReference.js";
let StockMovement = class StockMovement {
    movement_id;
    inventory_id;
    movement_type_id;
    quantity_change;
    reference_type_id;
    reference_id;
    is_active;
    created_at;
    created_by;
    updated_at;
    updated_by;
    inventory;
    movementType;
    referenceType;
};
__decorate([
    PrimaryGeneratedColumn({
        name: "movement_id",
        type: "integer"
    })
], StockMovement.prototype, "movement_id", void 0);
__decorate([
    Column({
        name: "inventory_id",
        type: "integer"
    })
], StockMovement.prototype, "inventory_id", void 0);
__decorate([
    Column({
        name: "movement_type_id",
        type: "integer"
    })
], StockMovement.prototype, "movement_type_id", void 0);
__decorate([
    Column({
        name: "quantity_change",
        type: "integer"
    })
], StockMovement.prototype, "quantity_change", void 0);
__decorate([
    Column({
        name: "reference_type_id",
        type: "integer"
    })
], StockMovement.prototype, "reference_type_id", void 0);
__decorate([
    Column({
        name: "reference_id",
        type: "integer",
        nullable: true
    })
], StockMovement.prototype, "reference_id", void 0);
__decorate([
    Column({
        name: "is_active",
        type: "boolean",
        default: true
    })
], StockMovement.prototype, "is_active", void 0);
__decorate([
    Column({
        name: "created_at",
        type: "datetime"
    })
], StockMovement.prototype, "created_at", void 0);
__decorate([
    Column({
        name: "created_by",
        type: "integer",
        nullable: true
    })
], StockMovement.prototype, "created_by", void 0);
__decorate([
    Column({
        name: "updated_at",
        type: "datetime",
        nullable: true
    })
], StockMovement.prototype, "updated_at", void 0);
__decorate([
    Column({
        name: "updated_by",
        type: "integer",
        nullable: true
    })
], StockMovement.prototype, "updated_by", void 0);
__decorate([
    ManyToOne(() => Inventory, (inventory) => inventory.stockMovements, { nullable: false }),
    JoinColumn({
        name: "inventory_id",
        referencedColumnName: "inventory_id"
    })
], StockMovement.prototype, "inventory", void 0);
__decorate([
    ManyToOne(() => MovementType, (movementType) => movementType.stockMovements, { nullable: false }),
    JoinColumn({
        name: "movement_type_id",
        referencedColumnName: "movement_type_id"
    })
], StockMovement.prototype, "movementType", void 0);
__decorate([
    ManyToOne(() => ReferenceType, (referenceType) => referenceType.stockMovements, { nullable: false }),
    JoinColumn({
        name: "reference_type_id",
        referencedColumnName: "reference_type_id"
    })
], StockMovement.prototype, "referenceType", void 0);
StockMovement = __decorate([
    Entity({ name: "transactions_stock_movement" })
], StockMovement);
export { StockMovement };
//# sourceMappingURL=TransactionsStockMovement.js.map