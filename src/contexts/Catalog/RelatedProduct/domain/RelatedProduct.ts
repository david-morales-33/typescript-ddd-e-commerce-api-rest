import { RelatedMainProductId } from "./RelatedMainProductId";
import { RelatedProductDTO } from "./RelatedProductDTO";
import { RelatedProductId } from "./RelatedProductId";
import { RelatedReferencedProductId } from "./RelatedReferencedProductId";

export class RelatedProduct {
    constructor(
        public readonly id: RelatedProductId,
        public readonly mainProductId: RelatedMainProductId,
        public readonly relatedProductoId: RelatedReferencedProductId
    ) { }

    public static fromPrimitives(data: RelatedProductDTO): RelatedProduct {
        return new RelatedProduct(
            new RelatedProductId(data.id),
            new RelatedMainProductId(data.mainProductId),
            new RelatedReferencedProductId(data.relatedProductoId)
        )
    }

    public toPrimitives(): RelatedProductDTO {
        return new RelatedProductDTO(
            this.id.value,
            this.mainProductId.value,
            this.relatedProductoId.value
        )
    }
}