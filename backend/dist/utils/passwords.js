import bcrypt from "bcrypt";
const SALT = 10;
export async function hashPassword(plainPassword) {
    return bcrypt.hash(plainPassword, SALT);
}
export async function comparePassword(plainPassword, hashPassword) {
    return bcrypt.compare(plainPassword, hashPassword);
}
//# sourceMappingURL=passwords.js.map