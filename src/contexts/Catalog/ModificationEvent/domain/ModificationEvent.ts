import { User } from "../../User/domain/User";
import { ModificationEventDate } from "./ModificationEventDate";
import { ModificationEventId } from "./ModificationEventId";
import { ModificationEventName } from "./ModificationEventName";
import { ModificationEventNewValue } from "./ModificationEventNewValue";
import { ModificationEventPreviusValue } from "./ModificationEventPreviusValue";

export class ModificationEvent {
    constructor(
        public readonly id: ModificationEventId,
        public readonly name: ModificationEventName,
        public readonly date: ModificationEventDate,
        public readonly previusValue: ModificationEventPreviusValue,
        public readonly newValue: ModificationEventNewValue,
        public readonly createBy: User
    ) { }
}