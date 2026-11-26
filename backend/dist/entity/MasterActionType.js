var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { Entity, PrimaryGeneratedColumn, Column, OneToMany, } from "typeorm";
import { Audit } from "./TransactionsAudit.js";
let ActionType = class ActionType {
    // ======================================================
    // PRIMARY KEY
    // ======================================================
    action_type_id;
    // ======================================================
    // ACTION TYPE CODE
    // ======================================================
    code;
    // ======================================================
    // DESCRIPTION
    // ======================================================
    description;
    // ======================================================
    // ACTIVE STATUS
    // ======================================================
    is_active;
    // ======================================================
    // CREATED DETAILS
    // ======================================================
    created_at;
    // @Column({
    //     name: "created_by",
    //     type: "integer",
    //     nullable: false,
    // })
    // created_by!: number;
    // ======================================================
    // UPDATED DETAILS
    // ======================================================
    updated_at;
    // @Column({
    //     name: "updated_by",
    //     type: "integer",
    //     nullable: true,
    // })
    // updated_by!: number | null;
    // ======================================================
    // RELATION
    // master_action_type 1 ---- N transactions_audit
    // ======================================================
    audits;
};
__decorate([
    PrimaryGeneratedColumn({ name: "action_type_id" })
], ActionType.prototype, "action_type_id", void 0);
__decorate([
    Column({
        name: "code",
        type: "varchar",
        unique: true,
        nullable: false,
    })
], ActionType.prototype, "code", void 0);
__decorate([
    Column({
        name: "description",
        type: "varchar",
        nullable: true,
    })
], ActionType.prototype, "description", void 0);
__decorate([
    Column({
        name: "is_active",
        type: "boolean",
        default: true,
    })
], ActionType.prototype, "is_active", void 0);
__decorate([
    Column({
        name: "created_at",
        type: "datetime",
        nullable: false,
    })
], ActionType.prototype, "created_at", void 0);
__decorate([
    Column({
        name: "updated_at",
        type: "datetime",
        nullable: true,
    })
], ActionType.prototype, "updated_at", void 0);
__decorate([
    OneToMany(() => Audit, (audit) => audit.action_type)
], ActionType.prototype, "audits", void 0);
ActionType = __decorate([
    Entity({ name: "master_action_type" })
], ActionType);
export { ActionType };
//# sourceMappingURL=MasterActionType.js.map