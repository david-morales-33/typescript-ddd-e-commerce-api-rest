import { MediaFile } from "../../../MediaFile/domain/MediaFile";
import { ProductCommandRepository } from "../../domain/ProductCommandRepository";
import { ProductId } from "../../domain/ProductId";
import { ProductNotFoundException } from "../../domain/ProductNotFoundException";
import { ProductQueryRepository } from "../../domain/ProductQueryRepository";

export class MediaFileCreator {
    constructor(
        private commandRepository: ProductCommandRepository,
        private queryRepository: ProductQueryRepository
    ) { }

    async execute(productId: ProductId, mediaFileList: MediaFile[]) {
        const product = await this.queryRepository.find(productId);
        if (product === null) throw new ProductNotFoundException(productId.value);
        product.addMediaFile(mediaFileList);
        await this.commandRepository.save(product);
    }
}