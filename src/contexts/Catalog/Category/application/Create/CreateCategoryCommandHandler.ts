import { Command } from "../../../../Shared/domain/cqrs/Command";
import { CommandHandler } from "../../../../Shared/domain/cqrs/CommandHandler";
import { UserId } from "../../../User/domain/UserId";
import { CategoryCreationDate } from "../../domain/CategoryCreationDate";
import { CategoryDescription } from "../../domain/CategoryDescription";
import { CategoryId } from "../../domain/CategoryId";
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
        const id = new CategoryId(command.id);
        const name = new CategoryValue(command.value);
        const level = CategoryLevel.fromValue(command.level);
        const description = new CategoryDescription(command.description);
        const createBy = new UserId(command.createBy);
        const createAt = new CategoryCreationDate(new Date());

        await this.creator.execute(id, name, level, description, createBy, createAt);
    }
}