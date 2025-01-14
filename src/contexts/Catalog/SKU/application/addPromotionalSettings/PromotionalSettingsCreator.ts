import { PromotionalSettings } from "../../../PromotionalSettings/domain/PromotionalSettings";
import { SkuCommandRepository } from "../../domain/SkuCommandRepository";
import { SkuId } from "../../domain/SkuId";
import { SkuQueryRepository } from "../../domain/SkuQueryRepository";

export class PromotionalSettingsCreator {
    constructor(
        private queryRepository: SkuQueryRepository,
        private commandRepository: SkuCommandRepository
    ) { }
    async execute(skuId: SkuId, promotionalSettings: PromotionalSettings) {
        const sku = await this.queryRepository.find(skuId);
        sku.addPromotionalSettings(promotionalSettings);
        await this.commandRepository.save(sku);
    }
}