import { User } from "../../User/domain/User";
import { UserId } from "../../User/domain/UserId";
import { CreationEventDate } from "./CreationEventDate";
import { CreationEventDTO } from "./CreationEventDTO";
import { CreationEventId } from "./CreationEventId";
import { CreationEventName } from "./CreationEventName";

export class CreationEvent {
    constructor(
        public readonly id: CreationEventId,
        public readonly name: CreationEventName,
        public readonly date: CreationEventDate,
        public readonly createdBy: UserId
    ) { }

    public static fromPrimitives(data: CreationEventDTO): CreationEvent {
        return new CreationEvent(
            new CreationEventId(data.id),
            new CreationEventName(data.name),
            new CreationEventDate(data.date),
            new UserId(data.createdBy)
        )
    }

    public toPrimitives(): CreationEventDTO {
        return new CreationEventDTO(
            this.id.value,
            this.name.value,
            this.date.value,
            this.createdBy.value
        )
    }
}