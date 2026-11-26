var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from "typeorm";
import { Product } from "./TransactionsProduct.js";
let Type = class Type {
    product_type_id;
    type_name;
    is_active;
    created_at;
    created_by;
    updated_at;
    updated_by;
    products;
};
__decorate([
    PrimaryGeneratedColumn({
        name: "product_type_id",
        type: "integer"
    })
], Type.prototype, "product_type_id", void 0);
__decorate([
    Column({
        name: "type_name",
        type: "varchar",
        unique: true
    })
], Type.prototype, "type_name", void 0);
__decorate([
    Column({
        name: "is_active",
        type: "boolean",
        default: true
    })
], Type.prototype, "is_active", void 0);
__decorate([
    Column({
        name: "created_at",
        type: "datetime",
        nullable: false
    })
], Type.prototype, "created_at", void 0);
__decorate([
    Column({
        name: "created_by",
        type: "integer",
        nullable: false
    })
], Type.prototype, "created_by", void 0);
__decorate([
    Column({
        name: "updated_at",
        type: "datetime",
        nullable: true
    })
], Type.prototype, "updated_at", void 0);
__decorate([
    Column({
        name: "updated_by",
        type: "integer",
        nullable: true
    })
], Type.prototype, "updated_by", void 0);
__decorate([
    OneToMany(() => Product, (product) => product.type)
], Type.prototype, "products", void 0);
Type = __decorate([
    Entity({ name: "master_product_type" })
], Type);
export { Type };
//# sourceMappingURL=MasterProductType.js.map