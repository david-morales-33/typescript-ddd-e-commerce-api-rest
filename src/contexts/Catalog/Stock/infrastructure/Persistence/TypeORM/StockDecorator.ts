import { AvailabilityRegionDTO } from "../../../../AvailabilityRegion/domain/AvailabilityRegionDTO";
import { StockDTO } from "../../../domain/StockDTO";

export class StockDecorator extends StockDTO {
    constructor(
        public readonly id: string,
        public readonly state: string,
        public readonly availabilityRegion: AvailabilityRegionDTO,
        public readonly skuId: string,
    ) { super(id, state, availabilityRegion) }
}