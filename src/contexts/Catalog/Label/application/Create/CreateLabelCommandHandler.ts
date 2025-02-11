import { Command } from "../../../../Shared/domain/cqrs/Command";
import { CommandHandler } from "../../../../Shared/domain/cqrs/CommandHandler";
import { LabelId } from "../../domain/LabelId";
import { LabelValue } from "../../domain/LabelValue";
import { CreateLabelCommand } from "./CreateLabelCommand";
import { LabelCreator } from "./LabelCreator";


export class CreateLabelCommandHandler implements CommandHandler<CreateLabelCommand> {
    constructor(private creator: LabelCreator) { }
    subscribedTo(): Command {
        return CreateLabelCommand;
    }
    async handle(command: CreateLabelCommand): Promise<void> {
        const id = new LabelId(command.id);
        const value = new LabelValue(command.value);
        await this.creator.execute(id, value);
    }
}