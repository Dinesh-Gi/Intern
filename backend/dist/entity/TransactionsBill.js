var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, OneToMany, JoinColumn } from "typeorm";
import { Store } from "./TransactionsStore.js";
import { Customer } from "./TransactionsCustomer.js";
import { Discount } from "./TransactionsDiscount.js";
import { BillItem } from "./TransactionsBillItem.js";
let Bill = class Bill {
    bill_id;
    invoice_number;
    store_id;
    customer_id;
    discount_id;
    subtotal;
    bill_discount_total;
    tax_total;
    rounding_adjustment;
    grand_total;
    status;
    is_active;
    created_at;
    created_by;
    updated_at;
    updated_by;
    store;
    customer;
    discount;
    billItems;
};
__decorate([
    PrimaryGeneratedColumn({
        name: "bill_id",
        type: "integer"
    })
], Bill.prototype, "bill_id", void 0);
__decorate([
    Column({
        name: "invoice_number",
        type: "varchar",
        unique: true
    })
], Bill.prototype, "invoice_number", void 0);
__decorate([
    Column({
        name: "store_id",
        type: "integer"
    })
], Bill.prototype, "store_id", void 0);
__decorate([
    Column({
        name: "customer_id",
        type: "integer"
    })
], Bill.prototype, "customer_id", void 0);
__decorate([
    Column({
        name: "discount_id",
        type: "integer",
        nullable: true,
    })
], Bill.prototype, "discount_id", void 0);
__decorate([
    Column({
        name: "subtotal",
        type: "decimal",
        precision: 12,
        scale: 2
    })
], Bill.prototype, "subtotal", void 0);
__decorate([
    Column({
        name: "bill_discount_total",
        type: "decimal",
        precision: 12,
        scale: 2,
        default: 0
    })
], Bill.prototype, "bill_discount_total", void 0);
__decorate([
    Column({
        name: "tax_total",
        type: "decimal",
        precision: 12,
        scale: 2,
        default: 0
    })
], Bill.prototype, "tax_total", void 0);
__decorate([
    Column({
        name: "rounding_adjustment",
        type: "decimal",
        precision: 12,
        scale: 2,
        default: 0
    })
], Bill.prototype, "rounding_adjustment", void 0);
__decorate([
    Column({
        name: "grand_total",
        type: "decimal",
        precision: 12,
        scale: 2
    })
], Bill.prototype, "grand_total", void 0);
__decorate([
    Column({
        name: "status",
        type: "varchar"
    })
], Bill.prototype, "status", void 0);
__decorate([
    Column({
        name: "is_active",
        type: "boolean",
        default: true
    })
], Bill.prototype, "is_active", void 0);
__decorate([
    Column({
        name: "created_at",
        type: "datetime"
    })
], Bill.prototype, "created_at", void 0);
__decorate([
    Column({
        name: "created_by",
        type: "integer",
        nullable: true
    })
], Bill.prototype, "created_by", void 0);
__decorate([
    Column({
        name: "updated_at",
        type: "datetime",
        nullable: true
    })
], Bill.prototype, "updated_at", void 0);
__decorate([
    Column({
        name: "updated_by",
        type: "integer",
        nullable: true
    })
], Bill.prototype, "updated_by", void 0);
__decorate([
    ManyToOne(() => Store, store => store.bills, {
        nullable: false
    }),
    JoinColumn({
        name: "store_id",
        referencedColumnName: "store_id"
    })
], Bill.prototype, "store", void 0);
__decorate([
    ManyToOne(() => Customer, customer => customer.bills, {
        nullable: false
    }),
    JoinColumn({
        name: "customer_id",
        referencedColumnName: "customer_id"
    })
], Bill.prototype, "customer", void 0);
__decorate([
    ManyToOne(() => Discount, discount => discount.bills, {
        nullable: true
    }),
    JoinColumn({
        name: "discount_id",
        referencedColumnName: "discount_id"
    })
], Bill.prototype, "discount", void 0);
__decorate([
    OneToMany(() => BillItem, billItem => billItem.bill)
], Bill.prototype, "billItems", void 0);
Bill = __decorate([
    Entity({ name: "transactions_bill" })
    // @Unique(
    //     "UQ_bill_store_id_invoice_number",
    //     ["store_id", "invoice_number"]
    // )
], Bill);
export { Bill };
//# sourceMappingURL=TransactionsBill.js.map