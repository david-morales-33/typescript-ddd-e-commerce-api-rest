import { Command } from "../../../../Shared/domain/cqrs/Command";
import { CommandHandler } from "../../../../Shared/domain/cqrs/CommandHandler";
import { Specification } from "../../../Specification/domain/Specification";
import { ProductId } from "../../domain/ProductId";
import { AddSpecificationCommand } from "./AddSpecificationCommand";
import { SpecificationCreator } from "./SpecificationCreator";


export class AddSpecificationCommandHandler implements CommandHandler<AddSpecificationCommand> {
    constructor(private creator: SpecificationCreator) { }

    subscribedTo(): Command {
        return AddSpecificationCommand;
    }
    async handle(command: AddSpecificationCommand): Promise<void> {
        const productId = new ProductId(command.productId);
        const specificationsList = command.specificationList.map(entry => Specification.fromPrimitives(entry));
        await this.creator.execute(productId, specificationsList);
    }
}