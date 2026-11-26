var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn } from "typeorm";
import { Inventory } from "./TransactionsInventory.js";
let DamagedGoods = class DamagedGoods {
    damage_id;
    inventory_id;
    qty;
    reason;
    unit_cost;
    loss_value;
    is_active;
    created_at;
    created_by;
    // UPDATED AT
    updated_at;
    // UPDATED BY
    updated_by;
    inventory;
};
__decorate([
    PrimaryGeneratedColumn({
        name: "damage_id",
        type: "integer"
    })
], DamagedGoods.prototype, "damage_id", void 0);
__decorate([
    Column({
        name: "inventory_id",
        type: "integer"
    })
], DamagedGoods.prototype, "inventory_id", void 0);
__decorate([
    Column({
        name: "qty",
        type: "integer"
    })
], DamagedGoods.prototype, "qty", void 0);
__decorate([
    Column({
        name: "reason",
        type: "varchar",
        nullable: true
    })
], DamagedGoods.prototype, "reason", void 0);
__decorate([
    Column({
        name: "unit_cost",
        type: "decimal",
        precision: 12,
        scale: 2
    })
], DamagedGoods.prototype, "unit_cost", void 0);
__decorate([
    Column({
        name: "loss_value",
        type: "decimal",
        precision: 12,
        scale: 2
    })
], DamagedGoods.prototype, "loss_value", void 0);
__decorate([
    Column({
        name: "is_active",
        type: "boolean",
        default: true
    })
], DamagedGoods.prototype, "is_active", void 0);
__decorate([
    Column({
        name: "created_at",
        type: "datetime"
    })
], DamagedGoods.prototype, "created_at", void 0);
__decorate([
    Column({
        name: "created_by",
        type: "integer",
        nullable: true
    })
], DamagedGoods.prototype, "created_by", void 0);
__decorate([
    Column({
        name: "updated_at",
        type: "datetime",
        nullable: true
    })
], DamagedGoods.prototype, "updated_at", void 0);
__decorate([
    Column({
        name: "updated_by",
        type: "integer",
        nullable: true
    })
], DamagedGoods.prototype, "updated_by", void 0);
__decorate([
    ManyToOne(() => Inventory, inventory => inventory.damagedGoods, {
        nullable: false
    }),
    JoinColumn({
        name: "inventory_id",
        referencedColumnName: "inventory_id"
    })
], DamagedGoods.prototype, "inventory", void 0);
DamagedGoods = __decorate([
    Entity({ name: "transactions_damaged_goods" })
], DamagedGoods);
export { DamagedGoods };
//# sourceMappingURL=TransactionsDamagedGoods.js.map