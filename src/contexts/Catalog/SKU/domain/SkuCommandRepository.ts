import { Sku } from "./Sku";

export interface SkuCommandRepository {
    save(sku: Sku): Promise<void>
}