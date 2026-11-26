import { User } from "../entity/TransactionsUser.js";
export interface UserData {
    firstname: string;
    lastname?: string | null;
    email: string;
    password_hash?: string;
    role_id: number;
    store_id: number;
    is_active?: boolean;
}
export interface CreateUserInput {
    firstname: string;
    lastname?: string;
    email: string;
    password: string;
    role_id: number;
}
export declare function getUsers(storeId?: number): Promise<User[]>;
export declare function getUserById(userId: number): Promise<User>;
export declare function updateUser(targetUserId: number, actingUserId: number, data: Partial<UserData>): Promise<{
    user_id: number;
    firstname: string;
    lastname: string | null | undefined;
    email: string;
    role_id: number;
    store_id: number;
    is_active: boolean;
    updated_at: Date | null;
}>;
export declare function createUserByAdmin(actingUserId: number, storeId: number, input: CreateUserInput): Promise<{
    userId: number;
    firstname: string;
    lastname: string | null | undefined;
    email: string;
    roleId: number;
    storeId: number;
    isActive: boolean;
    createdAt: Date;
}>;
export declare function deactivateUserWithOwnershipRules(targetUserId: number, actingUserId: number): Promise<{
    userId: number;
    firstname: string;
    lastname: string | null | undefined;
    email: string;
    roleId: number;
    storeId: number;
    isActive: boolean;
    updatedAt: Date | null;
}>;
export declare function restoreUser(targetUserId: number, actingUserId: number): Promise<{
    userId: number;
    firstname: string;
    lastname: string | null | undefined;
    email: string;
    roleId: number;
    storeId: number;
    isActive: boolean;
    updatedAt: Date | null;
}>;
//# sourceMappingURL=UserService.d.ts.map