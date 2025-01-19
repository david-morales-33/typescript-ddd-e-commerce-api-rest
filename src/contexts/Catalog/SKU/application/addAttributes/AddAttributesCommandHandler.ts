import { Command } from "../../../../Shared/domain/cqrs/Command";
import { CommandHandler } from "../../../../Shared/domain/cqrs/CommandHandler";
import { SkuAttribute } from "../../../SKUAttribute/domain/SkuAttribute";
import { SkuId } from "../../domain/SkuId";
import { AddAttributesCommand } from "./AddAttributesCommand";
import { AttributesCreator } from "./AttributesCreator";

export class AddAttributesCommandHandler implements CommandHandler<AddAttributesCommand> {
    constructor(private creator: AttributesCreator) { }
    subscribedTo(): Command {
        return AddAttributesCommand;
    }
    async handle(command: AddAttributesCommand): Promise<void> {
        const skuId = new SkuId(command.skuId);
        const attributeList = command.attributeList.map(entry => SkuAttribute.fromPrimitives(entry));
        await this.creator.execute(skuId, attributeList);
    }
}