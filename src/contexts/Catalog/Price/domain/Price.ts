import { PriceCurrency } from "./PriceCurrency";
import { PriceFinalDate } from "./PriceFinalDate";
import { PriceId } from "./PriceId";
import { PriceInitialDate } from "./PriceInitialDate";
import { PriceValue } from "./PriceValue";

export class Price {
    constructor(
        public readonly id: PriceId,
        public readonly value: PriceValue,
        public readonly currency: PriceCurrency,
        public readonly inicialDate: PriceInitialDate,
        public readonly finalDate: PriceFinalDate
    ) { }
}