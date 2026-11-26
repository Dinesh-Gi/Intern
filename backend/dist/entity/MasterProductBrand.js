var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from "typeorm";
import { Product } from "./TransactionsProduct.js";
let Brand = class Brand {
    product_brand_id;
    brand_name;
    is_active;
    created_at;
    created_by;
    updated_at;
    updated_by;
    products;
};
__decorate([
    PrimaryGeneratedColumn({
        name: "product_brand_id",
        type: "integer"
    })
], Brand.prototype, "product_brand_id", void 0);
__decorate([
    Column({
        name: "brand_name",
        type: "varchar",
        unique: true
    })
], Brand.prototype, "brand_name", void 0);
__decorate([
    Column({
        name: "is_active",
        type: "boolean",
        default: true
    })
], Brand.prototype, "is_active", void 0);
__decorate([
    Column({
        name: "created_at",
        type: "datetime",
        nullable: false
    })
], Brand.prototype, "created_at", void 0);
__decorate([
    Column({
        name: "created_by",
        type: "integer",
        nullable: false
    })
], Brand.prototype, "created_by", void 0);
__decorate([
    Column({
        name: "updated_at",
        type: "datetime",
        nullable: true
    })
], Brand.prototype, "updated_at", void 0);
__decorate([
    Column({
        name: "updated_by",
        type: "integer",
        nullable: true
    })
], Brand.prototype, "updated_by", void 0);
__decorate([
    OneToMany(() => Product, (product) => product.brand)
], Brand.prototype, "products", void 0);
Brand = __decorate([
    Entity({ name: "master_product_brand" })
], Brand);
export { Brand };
//# sourceMappingURL=MasterProductBrand.js.map