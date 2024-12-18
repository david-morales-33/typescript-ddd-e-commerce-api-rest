import { UserDTO } from "./UserDTO";
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
    ) { }

    public static fromPrimitives(data: UserDTO): User {
        return new User(
            new UserId(data.id),
            new UserName(data.name),
            new UserEmail(data.email),
            new UserRole(data.role)
        )
    }

    public toPrimitives(): UserDTO {
        return new UserDTO(
            this.id.value,
            this.name.value,
            this.email.value,
            this.role.value
        )
    }
}