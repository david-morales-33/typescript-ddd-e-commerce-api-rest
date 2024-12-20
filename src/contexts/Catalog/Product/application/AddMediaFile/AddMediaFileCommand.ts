import { Command } from "../../../../Shared/domain/cqrs/Command";
import { MediaFileDTO } from "../../../MediaFile/domain/MediaFileDTO";

export class AddMediaFileCommand implements Command {
    constructor(
        public readonly productId: string,
        public readonly mediaFileList: MediaFileDTO[]
    ) { }
}