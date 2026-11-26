var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn } from "typeorm";
import { Bill } from "./TransactionsBill.js";
import { Inventory } from "./TransactionsInventory.js";
let BillItem = class BillItem {
    bill_item_id;
    bill_id;
    inventory_id;
    // Snapshot of product name at time of sale — protects the bill's
    // history from later product renames.
    product_name_snapshot;
    qty;
    // Selling price at the time of sale (copied from Inventory), not a
    // live reference — protects history if selling_price changes later.
    unit_price;
    line_total;
    is_active;
    created_at;
    created_by;
    updated_at;
    updated_by;
    bill;
    inventory;
};
__decorate([
    PrimaryGeneratedColumn({
        name: "bill_item_id",
        type: "integer"
    })
], BillItem.prototype, "bill_item_id", void 0);
__decorate([
    Column({
        name: "bill_id",
        type: "integer"
    })
], BillItem.prototype, "bill_id", void 0);
__decorate([
    Column({
        name: "inventory_id",
        type: "integer"
    })
], BillItem.prototype, "inventory_id", void 0);
__decorate([
    Column({
        name: "product_name_snapshot",
        type: "varchar"
    })
], BillItem.prototype, "product_name_snapshot", void 0);
__decorate([
    Column({
        name: "qty",
        type: "integer"
    })
], BillItem.prototype, "qty", void 0);
__decorate([
    Column({
        name: "unit_price",
        type: "decimal",
        precision: 12,
        scale: 2
    })
], BillItem.prototype, "unit_price", void 0);
__decorate([
    Column({
        name: "line_total",
        type: "decimal",
        precision: 12,
        scale: 2
    })
], BillItem.prototype, "line_total", void 0);
__decorate([
    Column({
        name: "is_active",
        type: "boolean",
        default: true
    })
], BillItem.prototype, "is_active", void 0);
__decorate([
    Column({
        name: "created_at",
        type: "datetime"
    })
], BillItem.prototype, "created_at", void 0);
__decorate([
    Column({
        name: "created_by",
        type: "integer",
        nullable: true
    })
], BillItem.prototype, "created_by", void 0);
__decorate([
    Column({
        name: "updated_at",
        type: "datetime",
        nullable: true
    })
], BillItem.prototype, "updated_at", void 0);
__decorate([
    Column({
        name: "updated_by",
        type: "integer",
        nullable: true
    })
], BillItem.prototype, "updated_by", void 0);
__decorate([
    ManyToOne(() => Bill, (bill) => bill.billItems, { nullable: false }),
    JoinColumn({
        name: "bill_id",
        referencedColumnName: "bill_id"
    })
], BillItem.prototype, "bill", void 0);
__decorate([
    ManyToOne(() => Inventory, { nullable: false }),
    JoinColumn({
        name: "inventory_id",
        referencedColumnName: "inventory_id"
    })
], BillItem.prototype, "inventory", void 0);
BillItem = __decorate([
    Entity({ name: "transactions_bill_item" })
], BillItem);
export { BillItem };
//# sourceMappingURL=TransactionsBillItem.js.map