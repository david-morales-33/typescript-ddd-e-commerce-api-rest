import { Command } from "../../../../Shared/domain/cqrs/Command";
import { SkuAttributeDTO } from "../../../SKUAttribute/domain/SkuAttributeDTO";

export class AddAttributesCommand implements Command {
    constructor(
        public readonly skuId: string,
        public readonly attributeList: SkuAttributeDTO[]
    ) { }
}