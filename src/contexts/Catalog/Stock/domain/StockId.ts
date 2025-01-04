import { StringValueObject } from "../../../Shared/domain/value-objects/StringValueObject";
import { AvailabilityRegionId } from "../../AvailabilityRegion/domain/AvailabilityRegionId";
import { SkuId } from "../../SKU/domain/SkuId";

export class StockId extends StringValueObject {
    constructor(SkuId: SkuId, availabilityRegionId: AvailabilityRegionId) {
        super(`${SkuId.value}-${availabilityRegionId.value}`)
    }
}