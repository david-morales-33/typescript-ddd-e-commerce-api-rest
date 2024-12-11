import { UserEmail } from "./UserEmail";
import { UserId } from "./UserId";
import { UserName } from "./UserName";
import { UserRole } from "./UserRole";


export class User {
    constructor(
        public readonly id: UserId,
        public readonly name: UserName,
        public readonly email: UserEmail,
        public readonly role: UserRole
    ){}
}