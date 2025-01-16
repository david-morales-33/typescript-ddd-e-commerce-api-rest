import { SkuId } from "../../domain/SkuId";
import { SkuNotFoundException } from "../../domain/SkuNotFoundException";
import { SkuQueryRepository } from "../../domain/SkuQueryRepository";

export class SkuFinder {
    constructor(private repository: SkuQueryRepository) { }
    async execute(skuId: SkuId) {
        const sku = await this.repository.find(skuId);
        if (sku === null) throw new SkuNotFoundException(skuId.value);
        return sku;
    }
}