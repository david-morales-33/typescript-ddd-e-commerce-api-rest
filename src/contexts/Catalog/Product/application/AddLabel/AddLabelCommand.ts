import { Command } from "../../../../Shared/domain/cqrs/Command";
import { Label } from "../../../Label/domain/Label";
import { LabelDTO } from "../../../Label/domain/LabelDTO";
import { ProductId } from "../../domain/ProductId";

export class AddLabelCommand implements Command {
    constructor(
        public readonly productId: string,
        public readonly labelList: LabelDTO[]
    ) { }
}