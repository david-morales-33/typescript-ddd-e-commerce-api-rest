import { PriceCurrency } from "./PriceCurrency";
import { PriceFinalDate } from "./PriceFinalDate";
import { PriceId } from "./PriceId";
import { PriceInitialDate } from "./PriceInitialDate";
import { PriceValue } from "./PriceValue";


export class Price {
    constructor(
        id: PriceId,
        value: PriceValue,
        currency: PriceCurrency,
        inicialDate: PriceInitialDate,
        finalDate: PriceFinalDate
    ) { }
}