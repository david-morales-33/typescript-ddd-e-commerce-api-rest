import { NumberValueObject } from "../../../Shared/domain/value-objects/NumberValueObject";

export class ProductSpecificationsCounter extends NumberValueObject {
    constructor(value: number) {
        super(value);
    }
    public increment(): ProductSpecificationsCounter {
        return new ProductSpecificationsCounter(this.value + 1);
    }
}