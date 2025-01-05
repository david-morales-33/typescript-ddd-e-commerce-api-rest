import { AvailabilityRegion } from '../../AvailabilityRegion/domain/AvailabilityRegion';
import { SkuId } from '../../SKU/domain/SkuId';
import { StockDTO } from './StockDTO';
import { StockId } from './StockId';
import { StockState } from './StockState';

export class Stock {
    constructor(
        public readonly id: StockId,
        public readonly skuId: SkuId,
        public readonly state: StockState,
        public readonly availabilityRegion: AvailabilityRegion
    ) { }

    public static fromPrimitives(data: StockDTO): Stock {
        return new Stock(
            new StockId(data.id),
            new SkuId(data.skuId),
            StockState.fromValue(data.state),
            AvailabilityRegion.fromPrimitives(data.availabilityRegion)
        )
    }
    toPrimitives(): StockDTO {
        return new StockDTO(
            this.id.value,
            this.skuId.value,
            this.state.value,
            this.availabilityRegion.toPrimitives()
        )
    }
}