import { InvalidArgumentError } from "../../../Shared/domain/exceptions/InvalidArgumentError";
import { EnumValueObject } from "../../../Shared/domain/value-objects/EnumValueObject";

export enum Stock {
    AVAILABLE = "Available",
    UNAVAILABLE = "Unavailable"
}

export class AvailabilityRegionStock extends EnumValueObject<Stock> {
    constructor(value: Stock) {
        super(value, Object.values(Stock))
    }

    static fromValue(value: string): AvailabilityRegionStock {
        for (const orderTypeValue of Object.values(Stock)) {
            if (value === orderTypeValue.toString()) {
                return new AvailabilityRegionStock(orderTypeValue);
            }
        }
        throw new InvalidArgumentError(`The order type ${value} is invalid`);
    }

    public isAvailable(): boolean {
        return this.value === Stock.AVAILABLE;
    }

    protected throwErrorForInvalidValue(value: Stock): void {
        throw new InvalidArgumentError(`The value <${value}> is not valid`)
    }
}