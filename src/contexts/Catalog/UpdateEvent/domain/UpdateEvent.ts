import { UserId } from "../../User/domain/UserId";
import { UpdateEventDate } from "./UpdateEventDate";
import { UpdateEventDescription } from "./UpdateEventDescription";
import { UpdateEventDTO } from "./UpdateEventDTO";
import { UpdateEventField } from "./UpdateEventField";
import { UpdateEventId } from "./UpdateEventId";
import { UpdateEventNewValue } from "./UpdateEventNewValue";
import { UpdateEventPreviusValue } from "./UpdateEventPreviusValue";

export class UpdateEvent {
    constructor(
        public readonly id: UpdateEventId,
        public readonly description: UpdateEventDescription,
        public readonly date: UpdateEventDate,
        public readonly updatedField: UpdateEventField,
        public readonly previusValue: UpdateEventPreviusValue,
        public readonly newValue: UpdateEventNewValue,
        public readonly updateBy: UserId
    ) { }

    public static fromPrimitives(data: UpdateEventDTO): UpdateEvent {
        return new UpdateEvent(
            new UpdateEventId(data.id),
            new UpdateEventDescription(data.description),
            new UpdateEventDate(data.date),
            new UpdateEventField(data.updatedField),
            new UpdateEventPreviusValue(data.previusValue),
            new UpdateEventNewValue(data.newValue),
            new UserId(data.updatedBy)
        )
    }

    toPrimitives(): UpdateEventDTO {
        return new UpdateEventDTO(
            this.id.value,
            this.description.value,
            this.date.value,
            this.updatedField.value,
            this.previusValue.value,
            this.newValue.value,
            this.updateBy.value
        )
    }

}