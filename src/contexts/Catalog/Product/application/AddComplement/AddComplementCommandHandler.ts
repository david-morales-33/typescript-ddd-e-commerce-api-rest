import { Command } from "../../../../Shared/domain/cqrs/Command";
import { CommandHandler } from "../../../../Shared/domain/cqrs/CommandHandler";
import { Complement } from "../../../Complement/domain/Complement";
import { ProductId } from "../../domain/ProductId";
import { AddComplementCommand } from "./AddComplementCommand";
import { ComplementCreator } from "./ComplementCreator";

export class AddComplementCommandHandler implements CommandHandler<AddComplementCommand> {
    constructor(private creator: ComplementCreator) { }

    subscribedTo(): Command {
        return AddComplementCommand;
    }
    async handle(command: AddComplementCommand): Promise<void> {
        const productId = new ProductId(command.productId);
        const complementList = command.complementList.map(entry => Complement.fromPrimitives(entry));
        await this.creator.execute(productId, complementList);
    }
}