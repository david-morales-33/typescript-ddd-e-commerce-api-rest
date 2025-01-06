import { AggregateRoot } from "../../../Shared/domain/aggregate/AggregateRoot";
import { Price } from "../../Price/domain/Price";
import { ProductId } from "../../Product/domain/ProductId";
import { PromotionalSettings } from "../../PromotionalSettings/domain/PromotionalSettings";
import { SkuAttribute } from "../../SKUAttribute/domain/SkuAttribute";
import { Stock } from "../../Stock/domain/Stock";
import { SkuDTO } from "./SkuDTO";
import { SkuId } from "./SkuId";
import { SkuState } from "./SkuState";
import { SkuValue } from "./SkuValue";

export class Sku extends AggregateRoot {
    constructor(
        public readonly id: SkuId,
        public readonly value: SkuValue,
        public readonly state: SkuState,
        public readonly priceBase: Price,
        public readonly promotionalSettings: PromotionalSettings,
        public readonly stockList: Stock[],
        public readonly attributesList: SkuAttribute[],
    ) { super() }

    public static fromPrimitives(data: SkuDTO): Sku {
        return new Sku(
            new SkuId(data.id),
            new SkuValue(data.value),
            SkuState.fromValue(data.state),
            Price.fromPrimitives(data.priceBase),
            PromotionalSettings.fromPrimitives(data.promotionalSettings),
            data.stockList.map(entry => Stock.fromPrimitives(entry)),
            data.attributesList.map(entry => SkuAttribute.fromPrimitives(entry)),
        )
    }

    public toPrimitives(): SkuDTO {
        return new SkuDTO(
            this.id.value,
            this.value.value,
            this.state.value,
            this.priceBase.toPrimitives(),
            this.promotionalSettings.toPrimitives(),
            this.stockList.map(entry => entry.toPrimitives()),
            this.attributesList.map(entry => entry.toPrimitives()),
        )
    }
}