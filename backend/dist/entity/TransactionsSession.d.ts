import { User } from "./TransactionsUser.js";
import { Store } from "./TransactionsStore.js";
export declare class Session {
    session_id: number;
    user_id: number;
    store_id: number;
    login_at: Date;
    logout_at: Date | null;
    expires_at: Date | null;
    last_active_at: Date | null;
    ip_address: string | null;
    device_type: string | null;
    device_info: string | null;
    status: string;
    is_active: boolean;
    created_at: Date;
    user: User;
    store: Store;
    users: User;
}
//# sourceMappingURL=TransactionsSession.d.ts.map