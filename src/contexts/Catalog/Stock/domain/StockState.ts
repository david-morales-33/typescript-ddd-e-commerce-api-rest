import { InvalidArgumentError } from "../../../Shared/domain/exceptions/InvalidArgumentError";
import { EnumValueObject } from "../../../Shared/domain/value-objects/EnumValueObject";

export enum Stock {
    AVAILABLE = "Available",
    UNAVAILABLE = "Unavailable"
}

export class StockState extends EnumValueObject<Stock> {
    constructor(value: Stock) {
        super(value, Object.values(Stock))
    }

    static fromValue(value: string): StockState {
        for (const type of Object.values(Stock)) {
            if (value === type.toString()) {
                return new StockState(type);
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