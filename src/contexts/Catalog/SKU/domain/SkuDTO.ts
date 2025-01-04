import { AvailabilityRegionDTO } from "../../AvailabilityRegion/domain/AvailabilityRegionDTO";
import { PriceDTO } from "../../Price/domain/PriceDTO";
import { PromotionalSettingsDTO } from "../../PromotionalSettings/domain/PromotionalSettingsDTO";
import { SkuAttributeDTO } from "../../SKUAttribute/domain/SkuAttributeDTO";

export class SkuDTO {
    constructor(
        public readonly id: string,
        public readonly value: string,
        public readonly priceBase: PriceDTO,
        public readonly promotionalSettings: PromotionalSettingsDTO,
        public readonly availableRegion: AvailabilityRegionDTO,
        public readonly atributesList: SkuAttributeDTO[],
        public readonly productId: string,
        public readonly state: string,
    ) { }
}