import { PriceDTO } from "../../Price/domain/PriceDTO";
import { PromotionalSettingsDTO } from "../../PromotionalSettings/domain/PromotionalSettingsDTO";
import { SkuAttributeDTO } from "../../SKUAttribute/domain/SkuAttributeDTO";
import { StockDTO } from "../../Stock/domain/StockDTO";

export class SkuDTO {
    constructor(
        public readonly id: string,
        public readonly value: string,
        public readonly state: string,
        public readonly priceBase: PriceDTO,
        public readonly stockList: StockDTO[],
        public readonly attributesList: SkuAttributeDTO[],
        public readonly promotionalSettings?: PromotionalSettingsDTO
    ) { }
}