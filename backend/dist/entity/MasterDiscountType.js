var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from "typeorm";
import { Discount } from "./TransactionsDiscount.js";
let DiscountType = class DiscountType {
    discount_type_id;
    code;
    description;
    is_active;
    created_at;
    updated_at;
    discounts;
};
__decorate([
    PrimaryGeneratedColumn({ name: "discount_type_id" })
], DiscountType.prototype, "discount_type_id", void 0);
__decorate([
    Column({
        name: "code",
        type: "varchar",
        unique: true
    })
], DiscountType.prototype, "code", void 0);
__decorate([
    Column({
        name: "description",
        type: "varchar",
    })
], DiscountType.prototype, "description", void 0);
__decorate([
    Column({
        name: "is_active",
        type: "boolean",
        default: true
    })
], DiscountType.prototype, "is_active", void 0);
__decorate([
    Column({
        name: "created_at",
        type: "datetime",
        nullable: false
    })
], DiscountType.prototype, "created_at", void 0);
__decorate([
    Column({
        name: "updated_at",
        type: "datetime",
        nullable: true
    })
], DiscountType.prototype, "updated_at", void 0);
__decorate([
    OneToMany(() => Discount, (discount) => discount.discountType)
], DiscountType.prototype, "discounts", void 0);
DiscountType = __decorate([
    Entity({ name: "master_discount_type" })
], DiscountType);
export { DiscountType };
//# sourceMappingURL=MasterDiscountType.js.map