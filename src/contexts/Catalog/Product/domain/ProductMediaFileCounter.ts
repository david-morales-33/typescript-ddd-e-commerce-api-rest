import { NumberValueObject } from "../../../Shared/domain/value-objects/NumberValueObject";

export class ProductMediaFileCounter extends NumberValueObject {
    constructor(value: number) {
        super(value)
    }
    public static increment(value: number): ProductMediaFileCounter {
        return new ProductMediaFileCounter(value + 1);
    }
}