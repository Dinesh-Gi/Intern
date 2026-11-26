import { Audit } from "./TransactionsAudit.js";
export declare class ActionType {
    action_type_id: number;
    code: string;
    description: string | null;
    is_active: boolean;
    created_at: Date;
    updated_at: Date | null;
    audits: Audit[];
}
//# sourceMappingURL=MasterActionType.d.ts.map