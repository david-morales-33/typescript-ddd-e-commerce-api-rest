import { Stock } from "../../../Stock/domain/Stock";
import { SkuCommandRepository } from "../../domain/SkuCommandRepository";
import { SkuId } from "../../domain/SkuId";
import { SkuNotFoundException } from "../../domain/SkuNotFoundException";
import { SkuQueryRepository } from "../../domain/SkuQueryRepository";

export class StockCreator {
    constructor(
        private queryRepository: SkuQueryRepository,
        private commandRepository: SkuCommandRepository
    ) { }

    async execute(skuId: SkuId, stockList: Stock[]) {
        const sku = await this.queryRepository.find(skuId);
        if (sku === null) throw new SkuNotFoundException(skuId.value);
        sku.addStokList(stockList);
        await this.commandRepository.save(sku);
    }
}