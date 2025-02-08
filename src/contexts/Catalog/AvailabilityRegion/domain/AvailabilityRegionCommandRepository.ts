import { AvailabilityRegion } from "./AvailabilityRegion";

export interface AvailabilityRegionCommandRepository {
    save(AvailabilityRegion: AvailabilityRegion): Promise<void>;
}