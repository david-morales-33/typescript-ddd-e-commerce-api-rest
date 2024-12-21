import { Command } from "../../../../Shared/domain/cqrs/Command";
import { CommandHandler } from "../../../../Shared/domain/cqrs/CommandHandler";
import { Sku } from "../../../SKU/domain/Sku";
import { ProductId } from "../../domain/ProductId";
import { AddSkuCommand } from "./AddSkuCommand";
import { SkuCreator } from "./SkuCreator";

export class AddSkuCommandHandler implements CommandHandler<AddSkuCommand> {
    constructor(private creator: SkuCreator) { }
    subscribedTo(): Command {
        return AddSkuCommand;
    }
    async handle(command: AddSkuCommand): Promise<void> {
        const productId = new ProductId(command.productId);
        const skuList = command.skuList.map(entry => Sku.fromPrimitives(entry));
        await this.creator.execute(productId, skuList);
    }
}