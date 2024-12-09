import { InvalidArgumentError } from "../../../Shared/domain/exceptions/InvalidArgumentError";
import { Currencies } from "../../../Shared/domain/value-objects/Currency";
import { EnumValueObject } from "../../../Shared/domain/value-objects/EnumValueObject";

export class PriceCurrency extends EnumValueObject<Currencies> {
    constructor(value: Currencies) {
        super(value, Object.values(Currencies));
    }
    static fromValue(value: string): PriceCurrency {
        for (const priceCurrency of Object.values(Currencies)) {
            if (value === Currencies.toString()) {
                return new PriceCurrency(priceCurrency);
            }
        }
        throw new InvalidArgumentError(`The order type ${value} is invalid`);
    }

    protected throwErrorForInvalidValue(value: Currencies): void {
        throw new InvalidArgumentError(`The value <${value}> is not valid`)
    }
}