import { AggregateRoot } from "../../../Shared/domain/aggregate/AggregateRoot";
import { AvailabilityRegion } from "../../AvailabilityRegion/domain/AvailabilityRegion";
import { Price } from "../../Price/domain/Price";
import { PromotionalSettings } from "../../PromotionalSettings/domain/PromotionalSettings";
import { SkuAttribute } from "./SkuAttribute";
import { SkuId } from "./SkuId";
import { SkuState } from "./SkuState";
import { SkuValue } from "./SkuValue";

export class Sku extends AggregateRoot {
    constructor(
        public readonly id: SkuId,
        public readonly value: SkuValue,
        public readonly priceBase: Price,
        public readonly promotionalSettings: PromotionalSettings,
        public readonly availableRegion:AvailabilityRegion,
        public readonly atributesList: SkuAttribute[],
        public readonly state: SkuState,
    ) { super()}

    toPrimitives() {
        
    }
}