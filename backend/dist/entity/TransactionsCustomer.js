var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from "typeorm";
import { Bill } from "./TransactionsBill.js";
let Customer = class Customer {
    customer_id;
    phone_no;
    is_active;
    created_at;
    created_by;
    updated_at;
    updated_by;
    bills;
};
__decorate([
    PrimaryGeneratedColumn({
        name: "customer_id",
        type: "integer"
    })
], Customer.prototype, "customer_id", void 0);
__decorate([
    Column({
        name: "phone_no",
        type: "varchar",
        nullable: true,
    })
], Customer.prototype, "phone_no", void 0);
__decorate([
    Column({
        name: "is_active",
        type: "boolean",
        default: true
    })
], Customer.prototype, "is_active", void 0);
__decorate([
    Column({
        name: "created_at",
        type: "datetime"
    })
], Customer.prototype, "created_at", void 0);
__decorate([
    Column({
        name: "created_by",
        type: "integer",
        nullable: true
    })
], Customer.prototype, "created_by", void 0);
__decorate([
    Column({
        name: "updated_at",
        type: "datetime",
        nullable: true
    })
], Customer.prototype, "updated_at", void 0);
__decorate([
    Column({
        name: "updated_by",
        type: "integer",
        nullable: true
    })
], Customer.prototype, "updated_by", void 0);
__decorate([
    OneToMany(() => Bill, bill => bill.customer)
], Customer.prototype, "bills", void 0);
Customer = __decorate([
    Entity({ name: "transactions_customer" })
], Customer);
export { Customer };
//# sourceMappingURL=TransactionsCustomer.js.map