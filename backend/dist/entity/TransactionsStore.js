var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from "typeorm";
import { Session } from "./TransactionsSession.js";
import { User } from "./TransactionsUser.js";
import { Discount } from "./TransactionsDiscount.js";
import { Bill } from "./TransactionsBill.js";
import { Inventory } from "./TransactionsInventory.js";
import { Product } from "./TransactionsProduct.js";
let Store = class Store {
    store_id;
    gst_no;
    store_name;
    location;
    is_active;
    created_at;
    created_by;
    updated_at;
    updated_by;
    // One Store -> Many Discounts
    users;
    discounts;
    // One Store -> Many Sessions
    sessions;
    // One Store -> Many Bills
    bills;
    products;
    // One Store -> Many Inventory records
    inventory;
};
__decorate([
    PrimaryGeneratedColumn({
        name: "store_id",
        type: "integer"
    })
], Store.prototype, "store_id", void 0);
__decorate([
    Column({
        name: "gst_no",
        type: "varchar",
        unique: true
    })
], Store.prototype, "gst_no", void 0);
__decorate([
    Column({
        name: "store_name",
        type: "varchar"
    })
], Store.prototype, "store_name", void 0);
__decorate([
    Column({
        name: "location",
        type: "varchar",
        nullable: true
    })
], Store.prototype, "location", void 0);
__decorate([
    Column({
        name: "is_active",
        type: "boolean",
        default: true
    })
], Store.prototype, "is_active", void 0);
__decorate([
    Column({
        name: "created_at",
        type: "datetime"
    })
], Store.prototype, "created_at", void 0);
__decorate([
    Column({
        name: "created_by",
        type: "integer",
        nullable: true
    })
], Store.prototype, "created_by", void 0);
__decorate([
    Column({
        name: "updated_at",
        type: "datetime",
        nullable: true
    })
], Store.prototype, "updated_at", void 0);
__decorate([
    Column({
        name: "updated_by",
        type: "integer",
        nullable: true
    })
], Store.prototype, "updated_by", void 0);
__decorate([
    OneToMany(() => User, (user) => user.store)
], Store.prototype, "users", void 0);
__decorate([
    OneToMany(() => Discount, (discount) => discount.store)
], Store.prototype, "discounts", void 0);
__decorate([
    OneToMany(() => Session, (session) => session.store)
], Store.prototype, "sessions", void 0);
__decorate([
    OneToMany(() => Bill, (bill) => bill.store)
], Store.prototype, "bills", void 0);
__decorate([
    OneToMany(() => Product, (product) => product.store)
], Store.prototype, "products", void 0);
__decorate([
    OneToMany(() => Inventory, (inventory) => inventory.store)
], Store.prototype, "inventory", void 0);
Store = __decorate([
    Entity({ name: "transactions_store" })
], Store);
export { Store };
//# sourceMappingURL=TransactionsStore.js.map