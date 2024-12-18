import { UserDTO } from "../../User/domain/UserDTO";

export class CreationEventDTO {
    constructor(
        public readonly id: string,
        public readonly name: string,
        public readonly date: Date,
        public readonly createdBy: UserDTO
    ) { }
}