
export class RelatedProductDTO {
    constructor(
        public readonly id: string,
        public readonly mainProductId: string,
        public readonly relatedProductoId: string
    ) { }
}