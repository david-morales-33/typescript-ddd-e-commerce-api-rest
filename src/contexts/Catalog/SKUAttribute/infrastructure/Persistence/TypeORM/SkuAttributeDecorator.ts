import { SkuAttributeDTO } from "../../../domain/SkuAttributeDTO";

export class SkuAttributeDecorator extends SkuAttributeDTO {
    constructor(
        public readonly id: string,
        public readonly label: string,
        public readonly skuId: string
    ) { super(id, label) }
}