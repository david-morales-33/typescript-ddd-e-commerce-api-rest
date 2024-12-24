import { AvailabilityRegionQueryRepository } from "../../domain/AvailabilityRegionQueryRepository";

export class AvailabilityRegionSearcher {
    constructor(private repository: AvailabilityRegionQueryRepository) { }

    async execute() {
        return await this.repository.searchAll();
    }
}