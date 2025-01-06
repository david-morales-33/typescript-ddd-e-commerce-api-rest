import { AvailabilityRegionDTO } from "../../AvailabilityRegion/domain/AvailabilityRegionDTO";

export class StockDTO {
    constructor(
        public readonly id: string,
        public readonly state: string,
        public readonly availabilityRegion: AvailabilityRegionDTO
    ) { }
}