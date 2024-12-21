import { Command } from "../../../../Shared/domain/cqrs/Command";
import { SkuDTO } from "../../../SKU/domain/SkuDTO";

export class AddSkuCommand implements Command {
    constructor(
        public readonly productId: string,
        public readonly skuList: SkuDTO[]
    ){}
}