import { NumberValueObject } from "../../../Shared/domain/value-objects/NumberValueObject";

export class ProductSkuCounter extends NumberValueObject {
    public static increment(value: number): ProductSkuCounter {
        return new ProductSkuCounter(value + 1)
    }
}