import { SkuAttribute } from "../../../SKUAttribute/domain/SkuAttribute";
import { SkuCommandRepository } from "../../domain/SkuCommandRepository";
import { SkuId } from "../../domain/SkuId";
import { SkuNotFoundException } from "../../domain/SkuNotFoundException";
import { SkuQueryRepository } from "../../domain/SkuQueryRepository";

export class AttributesCreator {
    constructor(
        private commandRepository: SkuCommandRepository,
        private queryRepository: SkuQueryRepository
    ) { }

    async execute(skuId: SkuId, skuAttributesList: SkuAttribute[]) {
        const sku = await this.queryRepository.find(skuId);
        if (sku === null) throw new SkuNotFoundException(skuId.value);
        sku.addAttributeList(skuAttributesList);
        await this.commandRepository.save(sku);
    }
}