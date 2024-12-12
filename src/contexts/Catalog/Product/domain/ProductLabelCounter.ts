import { NumberValueObject } from "../../../Shared/domain/value-objects/NumberValueObject";

export class ProductLabelCounter extends NumberValueObject {
    constructor(value: number) {
        super(value);
    }
    public static increment(value: number): ProductLabelCounter {
        return new ProductLabelCounter(value + 1);
    }
}