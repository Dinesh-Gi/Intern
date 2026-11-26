import { Store } from "./TransactionsStore.js";
import { Session } from "./TransactionsSession.js";
import { ActionType } from "./MasterActionType.js";
export declare class Audit {
    audit_id: number;
    table_name: string;
    record_id: number;
    action_type_id: number;
    action_type: ActionType;
    store: Store;
    store_id: number | null;
    session: Session;
    session_id: number | null;
    ip_address: string | null;
    is_active: boolean;
}
//# sourceMappingURL=TransactionsAudit.d.ts.map