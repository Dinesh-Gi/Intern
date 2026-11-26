var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from "typeorm";
import { StockMovement } from "./TransactionsStockMovement.js";
let MovementType = class MovementType {
    movement_type_id;
    code;
    description;
    is_active;
    created_at;
    updated_at;
    stockMovements;
};
__decorate([
    PrimaryGeneratedColumn({
        name: "movement_type_id",
        type: "integer"
    })
], MovementType.prototype, "movement_type_id", void 0);
__decorate([
    Column({
        name: "code",
        type: "varchar",
        unique: true
    })
], MovementType.prototype, "code", void 0);
__decorate([
    Column({
        name: "description",
        type: "varchar",
        nullable: true
    })
], MovementType.prototype, "description", void 0);
__decorate([
    Column({
        name: "is_active",
        type: "boolean",
        default: true
    })
], MovementType.prototype, "is_active", void 0);
__decorate([
    Column({
        name: "created_at",
        type: "datetime",
        nullable: false
    })
], MovementType.prototype, "created_at", void 0);
__decorate([
    Column({
        name: "updated_at",
        type: "datetime",
        nullable: true
    })
], MovementType.prototype, "updated_at", void 0);
__decorate([
    OneToMany(() => StockMovement, (stockMovement) => stockMovement.movementType)
], MovementType.prototype, "stockMovements", void 0);
MovementType = __decorate([
    Entity({ name: "master_movement_type" })
], MovementType);
export { MovementType };
//# sourceMappingURL=MasterMovementType.js.map