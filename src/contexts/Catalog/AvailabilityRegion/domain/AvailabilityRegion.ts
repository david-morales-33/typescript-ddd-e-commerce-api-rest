import { AggregateRoot } from "../../../Shared/domain/aggregate/AggregateRoot";
import { AvailabilityRegionId } from "./AvailabilityRegionId";
import { AvailabilityRegionStock } from "./AvailabilityRegionStock";
import { AvailabilityRegionValue } from "./AvailabilityRegionValue";

export class AvailabilityRegion extends AggregateRoot {
    constructor(
        public readonly id: AvailabilityRegionId,
        public readonly region: AvailabilityRegionValue,
        public readonly stock: AvailabilityRegionStock
    ) { super() }

    toPrimitives() {

    }
}