import { NumberValueObject } from "../../../Shared/domain/value-objects/NumberValueObject";
import { DomainException } from "../../../Shared/exceptions/DomainException";

export class PriceValue extends NumberValueObject {
    constructor(value: number) {
        super(value);
        this.ensurePositiveValue(value);
    }

    private ensurePositiveValue(value: number) {
        if (value < 0) throw new DomainException(`The value <${value}> ist'n a valid price`)
    }
}