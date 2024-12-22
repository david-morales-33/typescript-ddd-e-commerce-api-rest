import { AggregateRoot } from "../../../Shared/domain/aggregate/AggregateRoot";
import { CreationEvent } from "../../CreationEvent/domain/CreationEvent";
import { AvailabilityRegionDTO } from "./AvailabilityRegionDTO";
import { AvailabilityRegionId } from "./AvailabilityRegionId";
import { AvailabilityRegionStock } from "./AvailabilityRegionStock";
import { AvailabilityRegionValue } from "./AvailabilityRegionValue";

export class AvailabilityRegion extends AggregateRoot {
    constructor(
        public readonly id: AvailabilityRegionId,
        public readonly region: AvailabilityRegionValue,
        public readonly stock: AvailabilityRegionStock,
        public readonly creationEvent: CreationEvent
    ) { super() }

    public static fromPrimitives(data: AvailabilityRegionDTO): AvailabilityRegion {
        return new AvailabilityRegion(
            new AvailabilityRegionId(data.id),
            new AvailabilityRegionValue(data.region),
            AvailabilityRegionStock.fromValue(data.stock),
            CreationEvent.fromPrimitives(data.creationEvent)
        );
    }

    toPrimitives(): AvailabilityRegionDTO {
        return new AvailabilityRegionDTO(
            this.id.value,
            this.region.value,
            this.stock.value,
            this.creationEvent.toPrimitives()
        )
    }
}