import { AggregateRoot } from "../../../Shared/domain/aggregate/AggregateRoot";
import { UserId } from "../../../Shared/domain/value-objects/UserId";
import { AvailabilityRegionCreationDate } from "./AvailabilityRegionCreationDate";
import { AvailabilityRegionDTO } from "./AvailabilityRegionDTO";
import { AvailabilityRegionId } from "./AvailabilityRegionId";
import { AvailabilityRegionValue } from "./AvailabilityRegionValue";

export class AvailabilityRegion extends AggregateRoot {
    constructor(
        public readonly id: AvailabilityRegionId,
        public readonly region: AvailabilityRegionValue,
        public readonly createBy: UserId,
        public readonly createAt: AvailabilityRegionCreationDate
    ) { super() }

    public static create(
        id: AvailabilityRegionId,
        region: AvailabilityRegionValue,
        createBy: UserId,
        createAt: AvailabilityRegionCreationDate
    ): AvailabilityRegion {
        return new AvailabilityRegion(id, region, createBy, createAt);
    }

    public static fromPrimitives(data: AvailabilityRegionDTO): AvailabilityRegion {
        return new AvailabilityRegion(
            new AvailabilityRegionId(data.id),
            new AvailabilityRegionValue(data.region),
            new UserId(data.createBy),
            new AvailabilityRegionCreationDate(data.createAt)
        );
    }

    toPrimitives(): AvailabilityRegionDTO {
        return new AvailabilityRegionDTO(
            this.id.value,
            this.region.value,
            this.createBy.value,
            this.createAt.value
        )
    }
}