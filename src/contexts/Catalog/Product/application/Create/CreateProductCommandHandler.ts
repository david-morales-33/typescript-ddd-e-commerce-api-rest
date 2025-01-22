import { Command } from "../../../../Shared/domain/cqrs/Command";
import { CommandHandler } from "../../../../Shared/domain/cqrs/CommandHandler";
import { UserId } from "../../../../Shared/domain/value-objects/UserId";
import { ProductTypeId } from "../../../ProductType/domain/ProductTypeId";
import { ProductTypeValue } from "../../../ProductType/domain/ProductTypeValue";
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
        const typeId = new ProductTypeId(command.typeId);
        const typeValue = new ProductTypeValue(command.typeValue);
        const productDescription = new ProductDescription(command.description);
        const createBy = new UserId(command.createBy);
        await this.creator.execute(productId, productName, typeId, typeValue, productDescription, createBy);
    }
}