import { InvalidArgumentError } from "../../../Shared/domain/exceptions/InvalidArgumentError";
import { EnumValueObject } from "../../../Shared/domain/value-objects/EnumValueObject";

export enum StateProduct {
    ENABLE = "Enable",
    DISABLE = "Disable",
    DISCONTINUED = "Discontinued"
}

export class ProductState extends EnumValueObject<StateProduct> {
    constructor(value: StateProduct) {
        super(value, Object.values(StateProduct));
    }
    static fromValue(value: string): ProductState {
        for (const state of Object.values(ProductState)) {
            if (value === state.toString()) {
                return new ProductState(state);
            }
        }
        throw new InvalidArgumentError(`The order type ${value} is invalid`);
    }
    protected throwErrorForInvalidValue(value: StateProduct): void {
        throw new InvalidArgumentError(`The value <${value}> is not valid`);
    }

}