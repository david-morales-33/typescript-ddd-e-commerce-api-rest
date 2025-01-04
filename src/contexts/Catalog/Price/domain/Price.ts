import { SkuId } from "../../SKU/domain/SkuId";
import { PriceCurrency } from "./PriceCurrency";
import { PriceDTO } from "./PriceDTO";
import { PriceFinalDate } from "./PriceFinalDate";
import { PriceId } from "./PriceId";
import { PriceInitialDate } from "./PriceInitialDate";
import { PriceValue } from "./PriceValue";

export class Price {
    constructor(
        public readonly id: PriceId,
        public readonly value: PriceValue,
        public readonly currency: PriceCurrency,
        public readonly initialDate: PriceInitialDate,
        public readonly finalDate: PriceFinalDate,
        public readonly skuId: SkuId,
    ) { }

    public static fromPrimitives(data: PriceDTO): Price {
        return new Price(
            new PriceId(data.id),
            new PriceValue(data.value),
            PriceCurrency.fromValue(data.currency),
            new PriceInitialDate(data.initialDate),
            new PriceFinalDate(data.finalDate),
            new SkuId(data.skuId)
        )
    }

    public toPrimitives(): PriceDTO {
        return new PriceDTO(
            this.id.value,
            this.value.value,
            this.currency.value,
            this.initialDate.value,
            this.finalDate.value,
            this.skuId.value
        )
    }
}