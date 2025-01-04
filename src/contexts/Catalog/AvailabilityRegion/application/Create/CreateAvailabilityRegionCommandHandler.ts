import { Command } from "../../../../Shared/domain/cqrs/Command";
import { CommandHandler } from "../../../../Shared/domain/cqrs/CommandHandler";
import { UserId } from "../../../User/domain/UserId";
import { AvailabilityRegionCreationDate } from "../../domain/AvailabilityRegionCreationDate";
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
        const id = new AvailabilityRegionId(command.id);
        const name = new AvailabilityRegionValue(command.region);
        const createdBy = new UserId(command.createdBy);
        const createdAt = new AvailabilityRegionCreationDate(new Date());

        await this.creator.execute(id, name, createdBy, createdAt);
    }
}