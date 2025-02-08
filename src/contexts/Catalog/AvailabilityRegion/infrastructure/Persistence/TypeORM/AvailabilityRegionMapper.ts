import { AvailabilityRegion } from "../../../domain/AvailabilityRegion";
import { AvailabilityRegionDecorator } from "./AvailabilityRegionDecorator";

export class AvailabilityRegionMapper {
    public static convertFromPersistenceObject(entity: AvailabilityRegionDecorator): AvailabilityRegion {
        return AvailabilityRegion.fromPrimitives(entity);
    }
    public static convertFromDomainObject(entity: AvailabilityRegion): AvailabilityRegionDecorator {
        return new AvailabilityRegionDecorator(
            entity.id.value,
            entity.region.value,
            entity.createBy.value,
            entity.createAt.value
        );
    }
}