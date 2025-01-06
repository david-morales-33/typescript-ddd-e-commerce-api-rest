import { SkuId } from "../../SKU/domain/SkuId";
import { SkuAttributeDTO } from "./SkuAttributeDTO";
import { SkuAttributeId } from "./SkuAttributeId";
import { SkuAttributeLabel } from "./SkuAttributeLabel";

export class SkuAttribute {
    constructor(
        public readonly id: SkuAttributeId,
        public readonly label: SkuAttributeLabel,
    ) { }

    public static fromPrimitives(data: SkuAttributeDTO): SkuAttribute {
        return new SkuAttribute(
            new SkuAttributeId(data.id),
            new SkuAttributeLabel(data.label),
        );
    }

    toPrimitives(): SkuAttributeDTO {
        return new SkuAttributeDTO(
            this.id.value,
            this.label.value,
        )
    }
}