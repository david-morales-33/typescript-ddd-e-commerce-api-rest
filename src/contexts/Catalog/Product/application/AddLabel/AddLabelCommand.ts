import { Command } from "../../../../Shared/domain/cqrs/Command";
import { Label } from "../../../Label/domain/Label";
import { ProductId } from "../../domain/ProductId";

export class AddLabelCommand implements Command {
    constructor(
        public readonly productId: ProductId,
        public readonly labelList: Label[]
    ) { }
}