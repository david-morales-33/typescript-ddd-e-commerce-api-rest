import { CreationEvent } from "../../../CreationEvent/domain/CreationEvent";
import { CreationEventDate } from "../../../CreationEvent/domain/CreationEventDate";
import { CreationEventId } from "../../../CreationEvent/domain/CreationEventId";
import { CreationEventName } from "../../../CreationEvent/domain/CreationEventName";
import { UserId } from "../../../User/domain/UserId";
import { AvailabilityRegion } from "../../domain/AvailabilityRegion";
import { AvailabilityRegionCommandRepository } from "../../domain/AvailabilityRegionCommandRepository";
import { AvailabilityRegionId } from "../../domain/AvailabilityRegionId";
import { AvailabilityRegionStock, Stock } from "../../domain/AvailabilityRegionStock";
import { AvailabilityRegionValue } from "../../domain/AvailabilityRegionValue";

export class AvailabilityRegionCreator {
    constructor(private repository: AvailabilityRegionCommandRepository) { }
    async execute(
        availabilityRegionId: AvailabilityRegionId,
        availabilityRegionName: AvailabilityRegionValue,
        createBy: UserId
    ) {
        const creationEvent = new CreationEvent(
            new CreationEventId(CreationEventId.random().value),
            new CreationEventName('New product'),
            new CreationEventDate(new Date()),
            createBy
        );

        const availabilityRegion = new AvailabilityRegion(
            availabilityRegionId,
            availabilityRegionName,
            new AvailabilityRegionStock(Stock.UNAVAILABLE),
            creationEvent
        );
        await this.repository.save(availabilityRegion);
    }
}