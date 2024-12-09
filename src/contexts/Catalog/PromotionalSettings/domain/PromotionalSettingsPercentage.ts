import { InvalidArgumentError } from "../../../Shared/domain/exceptions/InvalidArgumentError";
import { NumberValueObject } from "../../../Shared/domain/value-objects/NumberValueObject";

export class PromotionalSettingsPercentage extends NumberValueObject {
    constructor(value: number) {
        super(value);
        this.ensurePositiveValue(value);
    }
    private ensurePositiveValue(value: number) {
        if (value < 0) throw new InvalidArgumentError(`The value <${value}> is not valid`)
    }
}