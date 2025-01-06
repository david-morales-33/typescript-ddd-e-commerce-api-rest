import { PriceDTO } from "../../../../Price/domain/PriceDTO";
import { PromotionalSettingsDTO } from "../../../../PromotionalSettings/domain/PromotionalSettingsDTO";
import { SkuAttributeDTO } from "../../../../SKUAttribute/domain/SkuAttributeDTO";
import { StockDTO } from "../../../../Stock/domain/StockDTO";
import { SkuDTO } from "../../../domain/SkuDTO";

export class SkuDecorator extends SkuDTO {
    constructor(
        public readonly productId: string,
        public readonly id: string,
        public readonly value: string,
        public readonly state: string,
        public readonly priceBase: PriceDTO,
        public readonly promotionalSettings: PromotionalSettingsDTO,
        public readonly stockList: StockDTO[],
        public readonly attributesList: SkuAttributeDTO[],
    ) { super(id, value, state, priceBase, promotionalSettings, stockList, attributesList) }
}