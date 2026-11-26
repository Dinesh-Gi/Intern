var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn } from "typeorm";
import { User } from "./TransactionsUser.js";
import { Store } from "./TransactionsStore.js";
let Session = class Session {
    session_id;
    user_id;
    store_id;
    login_at;
    logout_at;
    expires_at;
    last_active_at;
    ip_address;
    device_type;
    device_info;
    status;
    is_active;
    created_at;
    // Many Sessions -> One User
    user;
    // Many Sessions -> One Store
    store;
    users;
};
__decorate([
    PrimaryGeneratedColumn({
        name: "session_id",
        type: "integer"
    })
], Session.prototype, "session_id", void 0);
__decorate([
    Column({
        name: "user_id",
        type: "integer",
        nullable: false
    })
], Session.prototype, "user_id", void 0);
__decorate([
    Column({
        name: "store_id",
        type: "integer",
        nullable: false
    })
], Session.prototype, "store_id", void 0);
__decorate([
    Column({
        name: "login_at",
        type: "datetime",
        nullable: false
    })
], Session.prototype, "login_at", void 0);
__decorate([
    Column({
        name: "logout_at",
        type: "datetime",
        nullable: true
    })
], Session.prototype, "logout_at", void 0);
__decorate([
    Column({
        name: "expires_at",
        type: "datetime",
        nullable: true
    })
], Session.prototype, "expires_at", void 0);
__decorate([
    Column({
        name: "last_active_at",
        type: "datetime",
        nullable: true
    })
], Session.prototype, "last_active_at", void 0);
__decorate([
    Column({
        name: "ip_address",
        type: "varchar",
        nullable: true
    })
], Session.prototype, "ip_address", void 0);
__decorate([
    Column({
        name: "device_type",
        type: "varchar",
        nullable: true
    })
], Session.prototype, "device_type", void 0);
__decorate([
    Column({
        name: "device_info",
        type: "varchar",
        nullable: true
    })
], Session.prototype, "device_info", void 0);
__decorate([
    Column({
        name: "status",
        type: "varchar",
        nullable: false
    })
], Session.prototype, "status", void 0);
__decorate([
    Column({
        name: "is_active",
        type: "boolean",
        default: true
    })
], Session.prototype, "is_active", void 0);
__decorate([
    Column({
        name: "created_at",
        type: "datetime",
        nullable: false
    })
], Session.prototype, "created_at", void 0);
__decorate([
    ManyToOne(() => User, (user) => user.sessions, {
        nullable: false
    }),
    JoinColumn({
        name: "user_id",
        referencedColumnName: "user_id"
    })
], Session.prototype, "user", void 0);
__decorate([
    ManyToOne(() => Store, (store) => store.sessions, {
        nullable: false
    }),
    JoinColumn({
        name: "store_id",
        referencedColumnName: "store_id"
    })
], Session.prototype, "store", void 0);
__decorate([
    ManyToOne(() => User, (user) => user.sessions, {
        nullable: false
    }),
    JoinColumn({
        name: "user_id",
        referencedColumnName: "user_id"
    })
], Session.prototype, "users", void 0);
Session = __decorate([
    Entity({ name: "transactions_session" })
], Session);
export { Session };
//# sourceMappingURL=TransactionsSession.js.map