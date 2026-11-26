var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn } from "typeorm";
import { Store } from "./TransactionsStore.js";
import { Session } from "./TransactionsSession.js";
import { ActionType } from "./MasterActionType.js";
let Audit = class Audit {
    // ======================================================
    // PRIMARY KEY
    // ======================================================
    audit_id;
    // ======================================================
    // TABLE NAME
    // ======================================================
    table_name;
    // ======================================================
    // RECORD ID
    // ======================================================
    record_id;
    // ======================================================
    // ACTION TYPE
    // ======================================================
    action_type_id;
    action_type;
    // ======================================================
    // UPDATED BY
    // ======================================================
    // @ManyToOne(
    //     () => User,
    //     {
    //         nullable: true
    //     }
    // )
    // @JoinColumn({
    //     name: "updated_by"
    // })
    // updated_by_user!: User;
    // @Column({
    //     type: "integer",
    //     nullable: true
    // })
    // updated_by!: number | null;
    // ======================================================
    // UPDATED AT
    // ======================================================
    // @Column({
    //     type: "datetime",
    //     default: () => "CURRENT_TIMESTAMP"
    // })
    // updated_at!: Date;
    // ======================================================
    // STORE
    // ======================================================
    store;
    store_id;
    // ======================================================
    // SESSION
    // ======================================================
    session;
    session_id;
    // ======================================================
    // IP ADDRESS
    // ======================================================
    ip_address;
    // ======================================================
    // ACTIVE FLAG
    // ======================================================
    is_active;
};
__decorate([
    PrimaryGeneratedColumn()
], Audit.prototype, "audit_id", void 0);
__decorate([
    Column({
        type: "varchar",
        length: 100
    })
], Audit.prototype, "table_name", void 0);
__decorate([
    Column({
        type: "integer"
    })
], Audit.prototype, "record_id", void 0);
__decorate([
    Column({
        type: "integer",
        name: "action_type_id"
    })
], Audit.prototype, "action_type_id", void 0);
__decorate([
    ManyToOne(() => ActionType, {
        nullable: false
    }),
    JoinColumn({
        name: "action_type_id"
    })
], Audit.prototype, "action_type", void 0);
__decorate([
    ManyToOne(() => Store, {
        nullable: true
    }),
    JoinColumn({
        name: "store_id"
    })
], Audit.prototype, "store", void 0);
__decorate([
    Column({
        type: "integer",
        nullable: true
    })
], Audit.prototype, "store_id", void 0);
__decorate([
    ManyToOne(() => Session, {
        nullable: true
    }),
    JoinColumn({
        name: "session_id"
    })
], Audit.prototype, "session", void 0);
__decorate([
    Column({
        type: "integer",
        nullable: true
    })
], Audit.prototype, "session_id", void 0);
__decorate([
    Column({
        type: "varchar",
        length: 45,
        nullable: true
    })
], Audit.prototype, "ip_address", void 0);
__decorate([
    Column({
        type: "boolean",
        default: true
    })
], Audit.prototype, "is_active", void 0);
Audit = __decorate([
    Entity({ name: "transactions_audit" })
], Audit);
export { Audit };
//# sourceMappingURL=TransactionsAudit.js.map