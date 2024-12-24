import { Command } from "../../../../Shared/domain/cqrs/Command";
import { CommandHandler } from "../../../../Shared/domain/cqrs/CommandHandler";
import { UserId } from "../../../User/domain/UserId";
import { CategoryDescription } from "../../domain/CategoryDescription";
import { CategoryLevel } from "../../domain/CategoryLevel";
import { CategoryValue } from "../../domain/CategoryValue";
import { CategoryCreator } from "./CategoryCreator";
import { CreateCategoryCommand } from "./CreateCategoryCommand";

export class CreateCategoryCommandHandler implements CommandHandler<CreateCategoryCommand> {
    constructor(private creator: CategoryCreator) { }

    subscribedTo(): Command {
        return CreateCategoryCommand;
    }
    async handle(command: CreateCategoryCommand): Promise<void> {
        const name = new CategoryValue(command.value);
        const level = CategoryLevel.fromValue(command.level);
        const description = new CategoryDescription(command.description);
        const createBy = new UserId(command.createBy);

        await this.creator.execute(name, level, description, createBy);
    }
}