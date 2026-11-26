import { Audit } from "../entity/TransactionsAudit.js";
import { EntityManager } from "typeorm";
export declare const createAuditRecordService: (manager: EntityManager, data: {
    tableName: string;
    recordId: number;
    actionTypeName: string;
    userId: number;
    storeId: number;
    sessionId: number;
    ipAddress?: string | null;
}) => Promise<Audit>;
export declare const createAuditService: (auditData: Partial<Audit> & {
    actionTypeName?: string;
    userId?: number;
}) => Promise<Audit>;
export declare const getAllAuditsService: () => Promise<Audit[]>;
export declare const getAuditByIdService: (auditId: number) => Promise<Audit | null>;
export declare const getAuditsByTableNameService: (tableName: string) => Promise<Audit[]>;
export declare const getAuditsByRecordIdService: (recordId: number) => Promise<Audit[]>;
export declare const getAuditsByTableAndRecordIdService: (tableName: string, recordId: number) => Promise<Audit[]>;
export declare const getAuditsByStoreService: (storeId: number) => Promise<Audit[]>;
export declare const getAuditsBySessionService: (sessionId: number) => Promise<Audit[]>;
export declare const getAuditsByActionTypeService: (actionTypeName: string) => Promise<Audit[]>;
export declare const deactivateAuditService: (auditId: number) => Promise<Audit>;
//# sourceMappingURL=AuditServices.d.ts.map