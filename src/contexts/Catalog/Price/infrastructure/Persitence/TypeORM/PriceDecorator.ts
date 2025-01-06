import { PriceDTO } from "../../../domain/PriceDTO";

export class PriceDecorator extends PriceDTO {
    constructor(
        public readonly id: string,
        public readonly value: number,
        public readonly currency: string,
        public readonly initialDate: Date,
        public readonly finalDate: Date,
        public readonly skuId: string,
    ) { super(id, value, currency, initialDate, finalDate) }
}