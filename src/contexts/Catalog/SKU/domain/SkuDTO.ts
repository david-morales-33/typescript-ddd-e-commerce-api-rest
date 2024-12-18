import { AvailabilityRegionDTO } from "../../AvailabilityRegion/domain/AvailabilityRegionDTO";
import { PriceDTO } from "../../Price/domain/PriceDTO";
import { PromotionalSettingsDTO } from "../../PromotionalSettings/domain/PromotionalSettingsDTO";

export class SkuDTO {
    constructor(
        public readonly id: string,
        public readonly value: string,
        public readonly priceBase: PriceDTO,
        public readonly promotionalSettings: PromotionalSettingsDTO,
        public readonly availableRegion: AvailabilityRegionDTO,
        public readonly atributesList: string[],
        public readonly state: string,
    ) { }
}