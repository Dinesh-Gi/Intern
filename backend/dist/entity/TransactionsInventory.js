var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, OneToMany, OneToOne, JoinColumn, Unique } from "typeorm";
import { Product } from "./TransactionsProduct.js";
import { Store } from "./TransactionsStore.js";
import { DamagedGoods } from "./TransactionsDamagedGoods.js";
import { StockMovement } from "./TransactionsStockMovement.js";
let Inventory = class Inventory {
    // Primary Key
    inventory_id;
    // Foreign Key → transactions_product.product_id
    product_id;
    // Foreign Key → transactions_store.store_id
    store_id;
    // Available quantity
    qty;
    // Cost price
    cost_price;
    // Selling price
    selling_price;
    // Active / inactive
    is_active;
    // Created timestamp
    created_at;
    // Created by user
    created_by;
    // Updated timestamp
    updated_at;
    // Updated by user
    updated_by;
    // --------------------------------------------------
    // RELATIONSHIPS
    // --------------------------------------------------
    // One Product ↔ One Inventory
    product;
    // Many Inventory records → One Store
    store;
    // One Inventory → Many Damaged Goods
    damagedGoods;
    // One Inventory → Many Stock Movements
    stockMovements;
};
__decorate([
    PrimaryGeneratedColumn({
        name: "inventory_id",
        type: "integer"
    })
], Inventory.prototype, "inventory_id", void 0);
__decorate([
    Column({
        name: "product_id",
        type: "integer",
        nullable: false
    })
], Inventory.prototype, "product_id", void 0);
__decorate([
    Column({
        name: "store_id",
        type: "integer",
        nullable: false
    })
], Inventory.prototype, "store_id", void 0);
__decorate([
    Column({
        name: "qty",
        type: "integer",
        nullable: false,
        default: 0
    })
], Inventory.prototype, "qty", void 0);
__decorate([
    Column({
        name: "cost_price",
        type: "decimal",
        precision: 12,
        scale: 2,
        nullable: true
    })
], Inventory.prototype, "cost_price", void 0);
__decorate([
    Column({
        name: "selling_price",
        type: "decimal",
        precision: 12,
        scale: 2,
        nullable: false
    })
], Inventory.prototype, "selling_price", void 0);
__decorate([
    Column({
        name: "is_active",
        type: "boolean",
        default: true,
        nullable: false
    })
], Inventory.prototype, "is_active", void 0);
__decorate([
    Column({
        name: "created_at",
        type: "datetime",
        nullable: false
    })
], Inventory.prototype, "created_at", void 0);
__decorate([
    Column({
        name: "created_by",
        type: "integer",
        nullable: true
    })
], Inventory.prototype, "created_by", void 0);
__decorate([
    Column({
        name: "updated_at",
        type: "datetime",
        nullable: true
    })
], Inventory.prototype, "updated_at", void 0);
__decorate([
    Column({
        name: "updated_by",
        type: "integer",
        nullable: true
    })
], Inventory.prototype, "updated_by", void 0);
__decorate([
    OneToOne(() => Product, product => product.inventory, {
        nullable: false,
        onDelete: "CASCADE"
    }),
    JoinColumn({
        name: "product_id",
        referencedColumnName: "product_id"
    })
], Inventory.prototype, "product", void 0);
__decorate([
    ManyToOne(() => Store, store => store.inventory, {
        nullable: false
    }),
    JoinColumn({
        name: "store_id",
        referencedColumnName: "store_id"
    })
], Inventory.prototype, "store", void 0);
__decorate([
    OneToMany(() => DamagedGoods, damagedGoods => damagedGoods.inventory)
], Inventory.prototype, "damagedGoods", void 0);
__decorate([
    OneToMany(() => StockMovement, stockMovement => stockMovement.inventory)
], Inventory.prototype, "stockMovements", void 0);
Inventory = __decorate([
    Entity({ name: "transactions_inventory" }),
    Unique("UQ_inventory_store_id_product_id", ["store_id", "product_id"])
], Inventory);
export { Inventory };
//# sourceMappingURL=TransactionsInventory.js.map