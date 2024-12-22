import { Command } from "../../../../Shared/domain/cqrs/Command";
import { CommandHandler } from "../../../../Shared/domain/cqrs/CommandHandler";
import { UserId } from "../../../User/domain/UserId";
import { AvailabilityRegionId } from "../../domain/AvailabilityRegionId";
import { AvailabilityRegionValue } from "../../domain/AvailabilityRegionValue";
import { AvailabilityRegionCreator } from "./AvailabilityRegionCreator";
import { CreateAvailabilityRegionCommand } from "./CreateAvailabilityRegionCommand";

export class CreateAvailabilityRegionCommandHandler implements CommandHandler<CreateAvailabilityRegionCommand> {
    constructor(private creator: AvailabilityRegionCreator) { }

    subscribedTo(): Command {
        return CreateAvailabilityRegionCommand;
    }

    async handle(command: CreateAvailabilityRegionCommand): Promise<void> {
        const availabilityRegionId = new AvailabilityRegionId(command.id);
        const availabilityRegionName = new AvailabilityRegionValue(command.region);
        const createdBy = new UserId(command.createdBy);

        await this.creator.execute(availabilityRegionId, availabilityRegionName, createdBy);
    }
}