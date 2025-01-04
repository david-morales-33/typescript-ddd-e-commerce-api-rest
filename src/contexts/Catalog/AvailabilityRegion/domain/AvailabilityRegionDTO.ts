import { CreationEventDTO } from "../../CreationEvent/domain/CreationEventDTO";

export class AvailabilityRegionDTO {
    constructor(
        public readonly id: string,
        public readonly region: string,
        public readonly createBy: string,
        public readonly createAt: Date
    ) { }
}