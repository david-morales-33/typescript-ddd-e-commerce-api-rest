import { LabelDTO } from "./LabelDTO";
import { LabelId } from "./LabelId";
import { LabelValue } from "./LabelValue";

export class Label {
    constructor(
        public readonly id: LabelId,
        public readonly value: LabelValue
    ) { }

    public static create(
        id: LabelId,
        value: LabelValue
    ): Label {
        return new Label(id, value);
    }
    public static fromPrimitives(data: LabelDTO): Label {
        return new Label(
            new LabelId(data.id),
            new LabelValue(data.value)
        )
    }

    public toPrimitives(): LabelDTO {
        return new LabelDTO(
            this.id.value,
            this.value.value
        );
    }
}