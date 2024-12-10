import { RelatedMainProductId } from "./RelatedMainProductId";
import { RelatedProductId } from "./RelatedProductId";
import { RelatedReferencedProductId } from "./RelatedReferencedProductId";

export class RelatedProduct {
    constructor(
        public readonly id: RelatedProductId,
        public readonly mainProductId: RelatedMainProductId,
        public readonly relatedProductoId: RelatedReferencedProductId
    ) { }
}