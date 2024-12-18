
export class ComplementDTO {
    constructor(
        public readonly id: string,
        public readonly mainProductId: string,
        public readonly complementProductoId: string
    ) { }
}