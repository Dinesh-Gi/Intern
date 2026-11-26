var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, OneToMany, JoinColumn, Unique } from "typeorm";
import { DiscountType } from "./MasterDiscountType.js";
import { Bill } from "./TransactionsBill.js";
import { Store } from "./TransactionsStore.js";
let Discount = class Discount {
    discount_id;
    store_id;
    discount_type_id;
    discount_name;
    discount_value;
    min_bill_amount;
    max_discount_amount;
    discount_from;
    discount_to;
    description;
    is_active;
    created_at;
    created_by;
    updated_at;
    updated_by;
    bills;
    store;
    discountType;
};
__decorate([
    PrimaryGeneratedColumn({ name: "discount_id" })
], Discount.prototype, "discount_id", void 0);
__decorate([
    Column({
        name: "store_id",
        type: "integer",
        nullable: false,
    })
], Discount.prototype, "store_id", void 0);
__decorate([
    Column({
        name: "discount_type_id",
        type: "integer",
        nullable: false,
    })
], Discount.prototype, "discount_type_id", void 0);
__decorate([
    Column({
        name: "discount_name",
        type: "varchar",
        nullable: false
    })
], Discount.prototype, "discount_name", void 0);
__decorate([
    Column({
        name: "discount_value",
        type: "decimal",
        precision: 12,
        scale: 2,
        nullable: false
    })
], Discount.prototype, "discount_value", void 0);
__decorate([
    Column({
        name: "min_bill_amount",
        type: "decimal",
        precision: 12,
        scale: 2,
        nullable: false
    })
], Discount.prototype, "min_bill_amount", void 0);
__decorate([
    Column({
        name: "max_discount_amount",
        type: "decimal",
        precision: 12,
        scale: 2,
        nullable: true
    })
], Discount.prototype, "max_discount_amount", void 0);
__decorate([
    Column({
        name: "discount_from",
        type: "datetime",
        nullable: false
    })
], Discount.prototype, "discount_from", void 0);
__decorate([
    Column({
        name: "discount_to",
        type: "datetime",
        nullable: true
    })
], Discount.prototype, "discount_to", void 0);
__decorate([
    Column({
        name: "description",
        type: "varchar",
    })
], Discount.prototype, "description", void 0);
__decorate([
    Column({
        name: "is_active",
        type: "boolean",
        default: true
    })
], Discount.prototype, "is_active", void 0);
__decorate([
    Column({
        name: "created_at",
        type: "datetime"
    })
], Discount.prototype, "created_at", void 0);
__decorate([
    Column({
        name: "created_by",
        type: "integer",
        nullable: true
    })
], Discount.prototype, "created_by", void 0);
__decorate([
    Column({
        name: "updated_at",
        type: "datetime",
        nullable: true
    })
], Discount.prototype, "updated_at", void 0);
__decorate([
    Column({
        name: "updated_by",
        type: "integer",
        nullable: true
    })
], Discount.prototype, "updated_by", void 0);
__decorate([
    OneToMany(() => Bill, (bill) => bill.discount)
], Discount.prototype, "bills", void 0);
__decorate([
    ManyToOne(() => Store, (store) => store.discounts),
    JoinColumn({ name: "store_id",
        referencedColumnName: "store_id"
    })
], Discount.prototype, "store", void 0);
__decorate([
    ManyToOne(() => DiscountType, (discountType) => discountType.discounts),
    JoinColumn({ name: "discount_type_id",
        referencedColumnName: "discount_type_id"
    })
], Discount.prototype, "discountType", void 0);
Discount = __decorate([
    Entity({ name: "transaction_discount" }),
    Unique("UQ_discount_store_id_discount_name", ["store_id", "discount_name"])
], Discount);
export { Discount };
//# sourceMappingURL=TransactionsDiscount.js.map