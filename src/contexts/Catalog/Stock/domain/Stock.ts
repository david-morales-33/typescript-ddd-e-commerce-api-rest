import { AvailabilityRegion } from '../../AvailabilityRegion/domain/AvailabilityRegion';
import { SkuId } from '../../SKU/domain/SkuId';
import { StockDTO } from './StockDTO';
import { StockState } from './StockState';

export class Stock {
    constructor(
        public readonly id: SkuId,
        public readonly state: StockState,
        public readonly availabilityRegionList: AvailabilityRegion[]
    ) { }

    public static fromPrimitives(data: StockDTO): Stock {
        return new Stock(
            new SkuId(data.id),
            StockState.fromValue(data.state),
            data.availabilityRegionList.map(entry => AvailabilityRegion.fromPrimitives(entry))
        )
    }
    toPrimitives(): StockDTO {
        return new StockDTO(
            this.id.value,
            this.state.value,
            this.availabilityRegionList.map(entry => entry.toPrimitives())
        )
    }
}