
export class PriceDTO {
    constructor(
        public readonly id: string,
        public readonly value: number,
        public readonly currency: string,
        public readonly initialDate: Date,
        public readonly finalDate: Date
    ) { }
}