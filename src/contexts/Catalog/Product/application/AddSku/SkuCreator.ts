import { Sku } from "../../../SKU/domain/Sku";
import { ProductCommandRepository } from "../../domain/ProductCommandRepository";
import { ProductId } from "../../domain/ProductId";
import { ProductNotFoundException } from "../../domain/ProductNotFoundException";
import { ProductQueryRepository } from "../../domain/ProductQueryRepository";

export class SkuCreator {
    constructor(
        private commandRepository: ProductCommandRepository,
        private queryRepository: ProductQueryRepository
    ) { }

    async execute(productId: ProductId, SkuList: Sku[]) {
        const product = await this.queryRepository.find(productId);
        if (product === null) throw new ProductNotFoundException(productId.value);
        product.addSku(SkuList);
        await this.commandRepository.save(product);
    }
}