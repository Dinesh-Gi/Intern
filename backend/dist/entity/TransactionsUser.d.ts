import { Role } from "./MasterRole.js";
import { Session } from "./TransactionsSession.js";
import { Store } from "./TransactionsStore.js";
export declare class User {
    user_id: number;
    firstname: string;
    lastname?: string | null;
    email: string;
    password_hash: string;
    role_id: number;
    store_id: number;
    is_active: boolean;
    created_at: Date;
    created_by: number | null;
    updated_at: Date | null;
    updated_by: number | null;
    role: Role;
    store: Store;
    sessions: Session[];
}
//# sourceMappingURL=TransactionsUser.d.ts.map