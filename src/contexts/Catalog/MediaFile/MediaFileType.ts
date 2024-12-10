import { InvalidArgumentError } from "../../Shared/domain/exceptions/InvalidArgumentError";
import { EnumValueObject } from "../../Shared/domain/value-objects/EnumValueObject";

export enum FileType {
    IMAGE = "Image",
    VIDEO = "Video"
}

export class MediaFileType extends EnumValueObject<FileType> {
    constructor(value: FileType) {
        super(value, Object.values(FileType));
    }
    static fromValue(value: string): MediaFileType {
        for (const categoryLevel of Object.values(MediaFileType)) {
            if (value === MediaFileType.toString()) {
                return new MediaFileType(categoryLevel);
            }
        }
        throw new InvalidArgumentError(`The order type ${value} is invalid`);
    }
    protected throwErrorForInvalidValue(value: FileType): void {
        throw new InvalidArgumentError(`The value <${value}> is not valid`);
    }
}