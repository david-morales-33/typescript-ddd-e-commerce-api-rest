import { UserId } from "../../../User/domain/UserId";
import { AvailabilityRegion } from "../../domain/AvailabilityRegion";
import { AvailabilityRegionCommandRepository } from "../../domain/AvailabilityRegionCommandRepository";
import { AvailabilityRegionCreationDate } from "../../domain/AvailabilityRegionCreationDate";
import { AvailabilityRegionId } from "../../domain/AvailabilityRegionId";
import { AvailabilityRegionValue } from "../../domain/AvailabilityRegionValue";

export class AvailabilityRegionCreator {
    constructor(private repository: AvailabilityRegionCommandRepository) { }
    async execute(
        id: AvailabilityRegionId,
        name: AvailabilityRegionValue,
        createBy: UserId,
        createAt: AvailabilityRegionCreationDate
    ) {
        const availabilityRegion = AvailabilityRegion.create(id, name, createBy, createAt)
        await this.repository.save(availabilityRegion);
    }
}