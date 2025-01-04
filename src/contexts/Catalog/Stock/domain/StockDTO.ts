import { AvailabilityRegionDTO } from "../../AvailabilityRegion/domain/AvailabilityRegionDTO";

export class StockDTO {
    constructor(
        public readonly state: string,
        public readonly skuId: string,
        public readonly availabilityRegion: AvailabilityRegionDTO
    ) { }
}