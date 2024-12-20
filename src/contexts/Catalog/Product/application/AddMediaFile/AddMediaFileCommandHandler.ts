import { Command } from "../../../../Shared/domain/cqrs/Command";
import { CommandHandler } from "../../../../Shared/domain/cqrs/CommandHandler";
import { MediaFile } from "../../../MediaFile/domain/MediaFile";
import { ProductId } from "../../domain/ProductId";
import { AddMediaFileCommand } from "./AddMediaFileCommand";
import { MediaFileCreator } from "./MediaFileCreator";

export class AddMediaFileCommandHandler implements CommandHandler<AddMediaFileCommand> {
    constructor(private creator: MediaFileCreator) { }
    subscribedTo(): Command {
        return AddMediaFileCommand;
    }
    async handle(command: AddMediaFileCommand): Promise<void> {
        const productId = new ProductId(command.productId);
        const mediaFileList = command.mediaFileList.map(entry => MediaFile.fromPrimitives(entry));
        await this.creator.execute(productId, mediaFileList);
    }
}