import { AggregateRoot } from "../../../Shared/domain/aggregate/AggregateRoot";
import { AvailabilityRegionDTO } from "./AvailabilityRegionDTO";
import { AvailabilityRegionId } from "./AvailabilityRegionId";
import { AvailabilityRegionStock } from "./AvailabilityRegionStock";
import { AvailabilityRegionValue } from "./AvailabilityRegionValue";

export class AvailabilityRegion extends AggregateRoot {
    constructor(
        public readonly id: AvailabilityRegionId,
        public readonly region: AvailabilityRegionValue,
        public readonly stock: AvailabilityRegionStock
    ) { super() }

    public static fromPrimitives(data: AvailabilityRegionDTO): AvailabilityRegion {
        return new AvailabilityRegion(
            new AvailabilityRegionId(data.id),
            new AvailabilityRegionValue(data.region),
            AvailabilityRegionStock.fromValue(data.stock)
        );
    }

    toPrimitives(): AvailabilityRegionDTO {
        return new AvailabilityRegionDTO(
            this.id.value,
            this.region.value,
            this.stock.value
        )
    }
}