var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from "typeorm";
import { StockMovement } from "./TransactionsStockMovement.js";
let ReferenceType = class ReferenceType {
    reference_type_id;
    code;
    description;
    is_active;
    created_at;
    updated_at;
    stockMovements;
};
__decorate([
    PrimaryGeneratedColumn({
        name: "reference_type_id",
        type: "integer"
    })
], ReferenceType.prototype, "reference_type_id", void 0);
__decorate([
    Column({
        name: "code",
        type: "varchar",
        unique: true
    })
], ReferenceType.prototype, "code", void 0);
__decorate([
    Column({
        name: "description",
        type: "varchar",
        nullable: true
    })
], ReferenceType.prototype, "description", void 0);
__decorate([
    Column({
        name: "is_active",
        type: "boolean",
        default: true
    })
], ReferenceType.prototype, "is_active", void 0);
__decorate([
    Column({
        name: "created_at",
        type: "datetime",
        nullable: false
    })
], ReferenceType.prototype, "created_at", void 0);
__decorate([
    Column({
        name: "updated_at",
        type: "datetime",
        nullable: true
    })
], ReferenceType.prototype, "updated_at", void 0);
__decorate([
    OneToMany(() => StockMovement, (stockMovement) => stockMovement.referenceType)
], ReferenceType.prototype, "stockMovements", void 0);
ReferenceType = __decorate([
    Entity({ name: "master_reference_type" })
], ReferenceType);
export { ReferenceType };
//# sourceMappingURL=MasterReference.js.map