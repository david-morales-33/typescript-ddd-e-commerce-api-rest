import { Command } from "../../../../Shared/domain/cqrs/Command";
import { CommandHandler } from "../../../../Shared/domain/cqrs/CommandHandler";
import { Stock } from "../../../Stock/domain/Stock";
import { SkuId } from "../../domain/SkuId";
import { AddAvailableStockCommand } from "./AddAvailableStockCommand";
import { StockCreator } from "./StockCreator";

export class AddAvailableStockCommandHandler implements CommandHandler<AddAvailableStockCommand> {
    constructor(private creator: StockCreator) { }
    subscribedTo(): Command {
        return AddAvailableStockCommand;
    }
    async handle(command: AddAvailableStockCommand): Promise<void> {
        const skuId = new SkuId(command.skuId);
        const availableStockList = command.stockList.map(entry => Stock.fromPrimitives(entry));
        
        await this.creator.execute(skuId, availableStockList);
    }
}