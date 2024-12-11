import { User } from "../../User/domain/User";
import { CreationEventDate } from "./CreationEventDate";
import { CreationEventId } from "./CreationEventId";
import { CreationEventName } from "./CreationEventName";

export class CreationEvent {
    constructor(
        public readonly id: CreationEventId,
        public readonly name: CreationEventName,
        public readonly date: CreationEventDate,
        public readonly createdBy: User
    ) { }
}