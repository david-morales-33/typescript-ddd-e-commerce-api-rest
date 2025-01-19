import { NumberValueObject } from "../../../Shared/domain/value-objects/NumberValueObject";

export class SkuAttributesCounter extends NumberValueObject {
    constructor(value: number) {
        super(value);
    }

    public increment(value: number): SkuAttributesCounter {
        return new SkuAttributesCounter(this.value + value);
    }
}