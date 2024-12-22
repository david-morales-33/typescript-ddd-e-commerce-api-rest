import { UserDTO } from "../../User/domain/UserDTO";

export class UpdateEventDTO {
    constructor(
        public readonly id: string,
        public readonly description: string,
        public readonly date: Date,
        public readonly updatedField: string,
        public readonly previusValue: string,
        public readonly newValue: string,
        public readonly updatedBy: string
    ) { }
}