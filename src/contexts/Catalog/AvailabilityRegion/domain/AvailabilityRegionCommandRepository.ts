import { AvailabilityRegion } from "./AvailabilityRegion";

export interface AvailabilityRegionCommandRepository {
    save(aAvailabilityRegion: AvailabilityRegion): Promise<void>;
}