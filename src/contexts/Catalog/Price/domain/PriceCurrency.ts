import { StringValueObject } from "../../../Shared/domain/value-objects/StringValueObject";
import { DomainException } from "../../../Shared/exceptions/DomainException";

export class PriceCurrency extends StringValueObject {
    constructor(value: string) {
        super(value);
        this.ensureValidValue(value);
    }
    private ensureValidValue(value: string) {
        if (value.length !== 3) throw new DomainException(`The currency format <${value}> is not valid`);
    }
}