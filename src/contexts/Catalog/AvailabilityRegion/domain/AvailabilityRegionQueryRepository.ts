import { AvailabilityRegion } from "./AvailabilityRegion";

export interface AvailabilityRegionQueryRepository{
    searchAll(): Promise<AvailabilityRegion[]>;
}