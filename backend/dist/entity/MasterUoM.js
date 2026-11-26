var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from "typeorm";
import { Product } from "./TransactionsProduct.js";
let UoM = class UoM {
    // ======================================================
    // UNIT ID
    // ======================================================
    unit_id;
    // ======================================================
    // UNIT NAME
    // Example: PCS, KG, L, BOX
    // ======================================================
    unit_name;
    // ======================================================
    // UNIT TYPE
    // Example: COUNT, WEIGHT, VOLUME, PACKAGING
    // ======================================================
    unit_type;
    // ======================================================
    // ACTIVE STATUS
    // ======================================================
    is_active;
    // ======================================================
    // CREATED AT
    // ======================================================
    created_at;
    // ======================================================
    // CREATED BY
    // NULL ALLOWED FOR SYSTEM / SEEDED DATA
    // ======================================================
    created_by;
    // ======================================================
    // UPDATED AT
    // ======================================================
    updated_at;
    // ======================================================
    // UPDATED BY
    // ======================================================
    updated_by;
    // ======================================================
    // PRODUCT RELATION
    // ======================================================
    products;
};
__decorate([
    PrimaryGeneratedColumn({
        name: "unit_id",
        type: "integer"
    })
], UoM.prototype, "unit_id", void 0);
__decorate([
    Column({
        name: "unit_name",
        type: "varchar",
        unique: true
    })
], UoM.prototype, "unit_name", void 0);
__decorate([
    Column({
        name: "unit_type",
        type: "varchar"
    })
], UoM.prototype, "unit_type", void 0);
__decorate([
    Column({
        name: "is_active",
        type: "boolean",
        default: true
    })
], UoM.prototype, "is_active", void 0);
__decorate([
    Column({
        name: "created_at",
        type: "datetime",
        nullable: false
    })
], UoM.prototype, "created_at", void 0);
__decorate([
    Column({
        name: "created_by",
        type: "integer",
        nullable: true
    })
], UoM.prototype, "created_by", void 0);
__decorate([
    Column({
        name: "updated_at",
        type: "datetime",
        nullable: true
    })
], UoM.prototype, "updated_at", void 0);
__decorate([
    Column({
        name: "updated_by",
        type: "integer",
        nullable: true
    })
], UoM.prototype, "updated_by", void 0);
__decorate([
    OneToMany(() => Product, (product) => product.uom)
], UoM.prototype, "products", void 0);
UoM = __decorate([
    Entity({
        name: "master_uom"
    })
], UoM);
export { UoM };
//# sourceMappingURL=MasterUoM.js.map