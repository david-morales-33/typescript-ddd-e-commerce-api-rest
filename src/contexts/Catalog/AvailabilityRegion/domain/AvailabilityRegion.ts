import { AvailabilityRegionId } from "./AvailabilityRegionId";
import { AvailabilityRegionStock } from "./AvailabilityRegionStock";
import { AvailabilityRegionValue } from "./AvailabilityRegionValue";

export class AvailabilityRegion {
    constructor(
        public readonly id: AvailabilityRegionId,
        public readonly region: AvailabilityRegionValue,
        public readonly stock: AvailabilityRegionStock
    ) { }
}