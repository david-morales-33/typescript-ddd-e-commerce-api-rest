import { Command } from "../../../../Shared/domain/cqrs/Command";
import { CommandHandler } from "../../../../Shared/domain/cqrs/CommandHandler";
import { UserId } from "../../../User/domain/UserId";
import { ProductDescription } from "../../domain/ProductDescription";
import { ProductId } from "../../domain/ProductId";
import { ProductName } from "../../domain/ProductName";
import { CreateProductCommand } from "./CreateProductCommand";
import { ProductCreator } from "./ProductCreator";

export class CreateProductCommandHandler implements CommandHandler<CreateProductCommand> {
    constructor(private creator: ProductCreator) { }
    subscribedTo(): Command {
        return CreateProductCommand;
    }

    async handle(command: CreateProductCommand): Promise<void> {
        const productId = new ProductId(command.id);
        const productName = new ProductName(command.name);
        const productDescription = new ProductDescription(command.description);
        const createBy = new UserId(command.createBy);
        await this.creator.execute(productId, productName, productDescription, createBy);
    }
}