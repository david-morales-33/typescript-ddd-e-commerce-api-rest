import { Command } from "../../../../Shared/domain/cqrs/Command";
import { CommandHandler } from "../../../../Shared/domain/cqrs/CommandHandler";
import { Category } from "../../../Category/domain/Category";
import { ProductId } from "../../domain/ProductId";
import { AddCategoryCommand } from "./AddCategoryCommand";
import { CategoryCreator } from "./CategoryCreator";

export class AddCategoryCommandHandler implements CommandHandler<AddCategoryCommand> {
    constructor(private creator: CategoryCreator) { }
    subscribedTo(): Command {
        return AddCategoryCommand;
    }

    async handle(command: AddCategoryCommand): Promise<void> {
        const productId = new ProductId(command.productId.value);
        const categoryList = command.categoryList.map(entry => Category.fromPrimitives(entry.toPrimitives()));
        await this.creator.execute(productId, categoryList);
    }
}