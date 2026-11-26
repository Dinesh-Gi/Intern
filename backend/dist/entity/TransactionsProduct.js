var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, 
// OneToMany,
OneToOne, JoinColumn } from "typeorm";
import { Store } from "./TransactionsStore.js";
import { Type } from "./MasterProductType.js";
import { Brand } from "./MasterProductBrand.js";
import { UoM } from "./MasterUoM.js";
import { Inventory } from "./TransactionsInventory.js";
// import { BillItem } from "./TransactionsBillItem.js";
let Product = class Product {
    product_id;
    store_id;
    product_name;
    type_id;
    brand_id;
    unit_id;
    unit_quantity;
    is_active;
    created_at;
    created_by;
    updated_at;
    updated_by;
    store;
    type;
    brand;
    uom;
    inventory;
};
__decorate([
    PrimaryGeneratedColumn({
        name: "product_id",
        type: "integer"
    })
], Product.prototype, "product_id", void 0);
__decorate([
    Column({
        name: "store_id",
        type: "integer"
    })
], Product.prototype, "store_id", void 0);
__decorate([
    Column({
        name: "product_name",
        type: "varchar"
    })
], Product.prototype, "product_name", void 0);
__decorate([
    Column({
        name: "type_id",
        type: "integer"
    })
], Product.prototype, "type_id", void 0);
__decorate([
    Column({
        name: "brand_id",
        type: "integer"
    })
], Product.prototype, "brand_id", void 0);
__decorate([
    Column({
        name: "unit_id",
        type: "integer"
    })
], Product.prototype, "unit_id", void 0);
__decorate([
    Column({
        name: "unit_quantity",
        type: "decimal",
        precision: 10,
        scale: 3
    })
], Product.prototype, "unit_quantity", void 0);
__decorate([
    Column({
        name: "is_active",
        type: "boolean",
        default: true
    })
], Product.prototype, "is_active", void 0);
__decorate([
    Column({
        name: "created_at",
        type: "datetime"
    })
], Product.prototype, "created_at", void 0);
__decorate([
    Column({
        name: "created_by",
        type: "integer",
        nullable: true
    })
], Product.prototype, "created_by", void 0);
__decorate([
    Column({
        name: "updated_at",
        type: "datetime",
        nullable: true
    })
], Product.prototype, "updated_at", void 0);
__decorate([
    Column({
        name: "updated_by",
        type: "integer",
        nullable: true
    })
], Product.prototype, "updated_by", void 0);
__decorate([
    ManyToOne(() => Store, store => store.products, {
        nullable: false,
        onDelete: "CASCADE"
    }),
    JoinColumn({
        name: "store_id",
        referencedColumnName: "store_id"
    })
], Product.prototype, "store", void 0);
__decorate([
    ManyToOne(() => Type, type => type.products, {
        nullable: false
    }),
    JoinColumn({
        name: "type_id",
        referencedColumnName: "product_type_id"
    })
], Product.prototype, "type", void 0);
__decorate([
    ManyToOne(() => Brand, (brand) => brand.products, {
        nullable: false
    }),
    JoinColumn({
        name: "brand_id",
        referencedColumnName: "product_brand_id"
    })
], Product.prototype, "brand", void 0);
__decorate([
    ManyToOne(() => UoM, uom => uom.products, {
        nullable: false
    }),
    JoinColumn({
        name: "unit_id",
        referencedColumnName: "unit_id"
    })
], Product.prototype, "uom", void 0);
__decorate([
    OneToOne(() => Inventory, inventory => inventory.product, { cascade: true } // optional: auto-save inventory when product is saved
    )
], Product.prototype, "inventory", void 0);
Product = __decorate([
    Entity({ name: "transactions_product" })
], Product);
export { Product };
//# sourceMappingURL=TransactionsProduct.js.map