import { NumberValueObject } from "../../../Shared/domain/value-objects/NumberValueObject";

export class ProductLabelCounter extends NumberValueObject {
    constructor(value: number) {
        super(value);
    }
    public increment(): ProductLabelCounter {
        return new ProductLabelCounter(this.value + 1);
    }
}