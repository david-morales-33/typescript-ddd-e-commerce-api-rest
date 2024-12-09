import { InvalidArgumentError } from "../../../Shared/domain/exceptions/InvalidArgumentError";
import { EnumValueObject } from "../../../Shared/domain/value-objects/EnumValueObject";

export enum Level {
    MASTER = "Master",
    CHILD = "Child"
}

export class CategoryLevel extends EnumValueObject<Level> {
    constructor(value: Level) {
        super(value, Object.values(Level))
    }
    static fromValue(value: string): CategoryLevel {
        for (const categoryLevel of Object.values(Level)) {
            if (value === Level.toString()) {
                return new CategoryLevel(categoryLevel);
            }
        }
        throw new InvalidArgumentError(`The order type ${value} is invalid`);
    }
    protected throwErrorForInvalidValue(value: Level): void {
        throw new InvalidArgumentError(`The value <${value}> is not valid`)
    }
}