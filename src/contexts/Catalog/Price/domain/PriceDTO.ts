

export class PriceDTO {
    constructor(
        public readonly id: string,
        public readonly value: string,
        public readonly currency: string,
        public readonly inicialDate: Date,
        public readonly finalDate: Date
    ) {

    }
}