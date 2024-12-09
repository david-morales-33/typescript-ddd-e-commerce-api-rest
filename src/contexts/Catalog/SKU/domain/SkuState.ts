import { InvalidArgumentError } from "../../../Shared/domain/exceptions/InvalidArgumentError";
import { EnumValueObject } from "../../../Shared/domain/value-objects/EnumValueObject";

export enum SkuStock {
    AVAILABLE = "Available",
    UNAVAILABLE = "Unavailable"
}

export class SkuState extends EnumValueObject<SkuStock> {
    constructor(value: SkuStock) {
        super(value, Object.values(SkuStock))
    }

    static fromValue(value: string): SkuState {
        for (const orderTypeValue of Object.values(SkuStock)) {
            if (value === orderTypeValue.toString()) {
                return new SkuState(orderTypeValue);
            }
        }
        throw new InvalidArgumentError(`The order type ${value} is invalid`);
    }

    public isAvailable(): boolean {
        return this.value === SkuStock.AVAILABLE;
    }

    protected throwErrorForInvalidValue(value: SkuStock): void {
        throw new InvalidArgumentError(`The value <${value}> is not valid`)
    }
}