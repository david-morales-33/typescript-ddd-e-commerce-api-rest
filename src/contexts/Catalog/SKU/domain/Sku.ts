import { SkuAttribute } from "./SkuAttribute";
import { SkuId } from "./SkuId";
import { SkuPriceBase } from "./SkuPriceBase";
import { SkuState } from "./SkuState";
import { SkuValue } from "./SkuValue";

export class Sku {
    constructor(
        public readonly id: SkuId,
        public readonly value: SkuValue,
        public readonly atributesList: SkuAttribute[],
        public readonly state: SkuState,
        public readonly priceBase: SkuPriceBase
    ) { }
}