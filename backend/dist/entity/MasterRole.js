var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from "typeorm";
import { User } from "./TransactionsUser.js";
let Role = class Role {
    role_id;
    role_name;
    is_active;
    created_at;
    updated_at;
    users;
};
__decorate([
    PrimaryGeneratedColumn({
        name: "role_id"
    })
], Role.prototype, "role_id", void 0);
__decorate([
    Column({
        name: "role_name",
        type: "varchar",
        unique: true
    })
], Role.prototype, "role_name", void 0);
__decorate([
    Column({
        name: "is_active",
        type: "boolean",
        default: true
    })
], Role.prototype, "is_active", void 0);
__decorate([
    Column({
        name: "created_at",
        type: "datetime",
        nullable: false
    })
], Role.prototype, "created_at", void 0);
__decorate([
    Column({
        name: "updated_at",
        type: "datetime",
        nullable: true
    })
], Role.prototype, "updated_at", void 0);
__decorate([
    OneToMany(() => User, (user) => user.role)
], Role.prototype, "users", void 0);
Role = __decorate([
    Entity({ name: "master_role" })
], Role);
export { Role };
//# sourceMappingURL=MasterRole.js.map