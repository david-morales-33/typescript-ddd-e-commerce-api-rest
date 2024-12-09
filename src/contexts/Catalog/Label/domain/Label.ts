import { LabelId } from "./LabelId";
import { LabelValue } from "./LabelValue";


export class Label {
    constructor(
        public readonly id: LabelId,
        public readonly value: LabelValue
    ) { }
}