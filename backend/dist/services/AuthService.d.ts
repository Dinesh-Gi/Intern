import { Role } from "../entity/MasterRole.js";
export interface SignUpData {
    firstname: string;
    lastname?: string;
    email: string;
    password: string;
    role_id?: number;
    store_id?: number;
    store_name?: string;
    gst_no?: string;
    location?: string;
}
export interface LogInData {
    email: string;
    password: string;
}
export declare function getSignupRoles(): Promise<Role[]>;
export declare function getSignupStores(search?: string): Promise<{
    storeId: number;
    storeName: string;
    location: string | null;
    ownerUserId: number | null;
    ownerName: string | null;
}[]>;
export declare function signUp(data: SignUpData): Promise<{
    token: string;
    user: {
        userId: number;
        firstname: string;
        lastname: string | null | undefined;
        email: string;
        roleId: number;
        storeId: number;
    };
}>;
export declare function logIn(data: LogInData): Promise<{
    token: string;
    user: {
        userId: number;
        firstname: string;
        lastname: string | null | undefined;
        email: string;
        roleId: number;
        storeId: number;
        sessionId: number;
    };
}>;
export declare function logOut(token: string): Promise<{
    message: string;
}>;
//# sourceMappingURL=AuthService.d.ts.map