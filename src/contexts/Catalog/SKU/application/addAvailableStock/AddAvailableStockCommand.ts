import { Command } from "../../../../Shared/domain/cqrs/Command";
import { StockDTO } from "../../../Stock/domain/StockDTO";

export class AddAvailableStockCommand implements Command {
    constructor(
        public readonly skuId: string,
        public readonly stockList: StockDTO[]
    ) { }
}