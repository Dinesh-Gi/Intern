import { Role } from "../entity/MasterRole.js";
export interface RoleData {
    role_name: string;
    is_active: boolean;
}
export interface RoleAuditData {
    userId: number;
    storeId: number;
    sessionId: number;
}
export declare function getRoles(): Promise<Role[]>;
export declare function getRoleById(roleId: number): Promise<Role>;
export declare function updateRole(roleId: number, data: Partial<RoleData>, auditData: RoleAuditData): Promise<{
    role: Role;
    audit: import("../entity/TransactionsAudit.js").Audit;
}>;
export declare function createRole(data: RoleData, auditData: RoleAuditData): Promise<{
    role: Role;
    audit: import("../entity/TransactionsAudit.js").Audit;
}>;
export declare function deleteRole(roleId: number, auditData: RoleAuditData): Promise<{
    role: Role;
    audit: import("../entity/TransactionsAudit.js").Audit;
}>;
//# sourceMappingURL=Role.d.ts.map