import { NumberValueObject } from "../../../Shared/domain/value-objects/NumberValueObject";

export class ProductMediaFileCounter extends NumberValueObject {
    constructor(value: number) {
        super(value)
    }
    public increment(): ProductMediaFileCounter {
        return new ProductMediaFileCounter(this.value + 1);
    }
}