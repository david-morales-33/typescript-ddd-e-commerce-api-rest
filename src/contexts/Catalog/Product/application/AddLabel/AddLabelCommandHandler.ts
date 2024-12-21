import { Command } from "../../../../Shared/domain/cqrs/Command";
import { CommandHandler } from "../../../../Shared/domain/cqrs/CommandHandler";
import { Label } from "../../../Label/domain/Label";
import { ProductId } from "../../domain/ProductId";
import { AddLabelCommand } from "./AddLabelCommand";
import { LabelCreator } from "./LabelCreator";


export class AddLabelCommandHandler implements CommandHandler<AddLabelCommand> {
    constructor(private creator: LabelCreator) { }
    subscribedTo(): Command {
        return AddLabelCommand;
    }
    async handle(command: AddLabelCommand): Promise<void> {
        const productId = new ProductId(command.productId.value);
        const labelList = command.labelList.map(entry => Label.fromPrimitives(entry.toPrimitives()));
        await this.creator.execute(productId, labelList);
    }
}