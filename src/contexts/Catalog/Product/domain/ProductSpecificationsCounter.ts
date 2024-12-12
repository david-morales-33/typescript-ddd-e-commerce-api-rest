import { NumberValueObject } from "../../../Shared/domain/value-objects/NumberValueObject";

export class ProductSpecificationsCounter extends NumberValueObject {
    constructor(value: number) {
        super(value);
    }
    public static increment(value: number): ProductSpecificationsCounter {
        return new ProductSpecificationsCounter(value + 1);
    }
}