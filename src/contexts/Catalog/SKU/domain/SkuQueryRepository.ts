import { Sku } from "./Sku";
import { SkuId } from "./SkuId";

export interface SkuQueryRepository {
    find(skuId: SkuId): Promise<Sku>
}