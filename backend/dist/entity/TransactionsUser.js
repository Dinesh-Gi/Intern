var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, OneToMany, JoinColumn } from "typeorm";
import { Role } from "./MasterRole.js";
import { Session } from "./TransactionsSession.js";
import { Store } from "./TransactionsStore.js";
let User = class User {
    user_id;
    firstname;
    lastname;
    email;
    password_hash;
    role_id;
    store_id;
    is_active;
    created_at;
    created_by;
    updated_at;
    updated_by;
    role;
    store;
    sessions;
};
__decorate([
    PrimaryGeneratedColumn({
        name: "user_id"
    })
], User.prototype, "user_id", void 0);
__decorate([
    Column({
        name: "firstname",
        type: "varchar"
    })
], User.prototype, "firstname", void 0);
__decorate([
    Column({
        name: "lastname",
        type: "varchar",
        nullable: true
    })
], User.prototype, "lastname", void 0);
__decorate([
    Column({
        name: "email",
        type: "varchar",
        unique: true
    })
], User.prototype, "email", void 0);
__decorate([
    Column({
        name: "password_hash",
        type: "varchar"
    })
], User.prototype, "password_hash", void 0);
__decorate([
    Column({
        name: "role_id",
        type: "integer",
    })
], User.prototype, "role_id", void 0);
__decorate([
    Column({
        name: "store_id",
        type: "integer",
        nullable: false,
    })
], User.prototype, "store_id", void 0);
__decorate([
    Column({
        name: "is_active",
        type: "boolean",
        default: true
    })
], User.prototype, "is_active", void 0);
__decorate([
    Column({
        name: "created_at",
        type: "datetime"
    })
], User.prototype, "created_at", void 0);
__decorate([
    Column({
        name: "created_by",
        type: "integer",
        nullable: true
    })
], User.prototype, "created_by", void 0);
__decorate([
    Column({
        name: "updated_at",
        type: "datetime",
        nullable: true
    })
], User.prototype, "updated_at", void 0);
__decorate([
    Column({
        name: "updated_by",
        type: "integer",
        nullable: true
    })
], User.prototype, "updated_by", void 0);
__decorate([
    ManyToOne(() => Role, (role) => role.users, {
        nullable: false,
        onDelete: "RESTRICT"
    }),
    JoinColumn({
        name: "role_id",
        referencedColumnName: "role_id"
    })
], User.prototype, "role", void 0);
__decorate([
    ManyToOne(() => Store, (store) => store.users, {
        nullable: false,
        onDelete: "RESTRICT"
    }),
    JoinColumn({
        name: "store_id",
        referencedColumnName: "store_id"
    })
], User.prototype, "store", void 0);
__decorate([
    OneToMany(() => Session, (session) => session.user)
], User.prototype, "sessions", void 0);
User = __decorate([
    Entity({ name: "transactions_user" })
], User);
export { User };
//# sourceMappingURL=TransactionsUser.js.map