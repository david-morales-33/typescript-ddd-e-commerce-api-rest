import { Response } from "../../../../Shared/domain/cqrs/Response";
import { AvailabilityRegion } from "../../domain/AvailabilityRegion";
import { AvailabilityRegionDTO } from "../../domain/AvailabilityRegionDTO";

export class AvailabilityRegionResponse implements Response {
    public readonly response: AvailabilityRegionDTO[];
    constructor(data: AvailabilityRegion[]) {
        this.response = data.map(entry => entry.toPrimitives());
    }
}