import { AggregateRoot } from "../../../Shared/domain/aggregate/AggregateRoot";
import { AvailabilityRegion } from "../../AvailabilityRegion/domain/AvailabilityRegion";
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
        public readonly priceBase: Price,
        public readonly promotionalSettings: PromotionalSettings,
        public readonly stock: Stock,
        public readonly atributesList: SkuAttribute[],
        public readonly productId: ProductId,
        public readonly state: SkuState,
    ) { super() }

    public static fromPrimitives(data: SkuDTO): Sku {
        return new Sku(
            new SkuId(data.id),
            new SkuValue(data.value),
            Price.fromPrimitives(data.priceBase),
            PromotionalSettings.fromPrimitives(data.promotionalSettings),
            Stock.fromPrimitives(data.stock),
            data.atributesList.map(entry => SkuAttribute.fromPrimitives(entry)),
            new ProductId(data.productId),
            SkuState.fromValue(data.state)
        )
    }

    public toPrimitives(): SkuDTO {
        return new SkuDTO(
            this.id.value,
            this.value.value,
            this.priceBase.toPrimitives(),
            this.promotionalSettings.toPrimitives(),
            this.stock.toPrimitives(),
            this.atributesList.map(entry => entry.toPrimitives()),
            this.productId.value,
            this.state.value
        )
    }
}