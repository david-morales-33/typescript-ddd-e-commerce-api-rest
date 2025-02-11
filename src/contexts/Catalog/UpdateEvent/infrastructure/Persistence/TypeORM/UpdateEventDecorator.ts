import { UpdateEventDTO } from "../../../domain/UpdateEventDTO";

export class UpdateEventDecorator extends UpdateEventDTO {
    constructor(
        public readonly id: string,
        public readonly description: string,
        public readonly date: Date,
        public readonly updatedField: string,
        public readonly previusValue: string,
        public readonly newValue: string,
        public readonly updatedBy: string,
        public readonly fk: any
    ) {
        super(id, description, date, updatedField, previusValue, newValue, updatedBy);
    }
}