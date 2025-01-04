import { AvailabilityRegion } from '../../AvailabilityRegion/domain/AvailabilityRegion';
import { SkuId } from '../../SKU/domain/SkuId';
import { StockDTO } from './StockDTO';
import { StockId } from './StockId'
import { StockState } from './StockState';

export class Stock {
    private _id: StockId;
    constructor(
        public readonly state: StockState,
        public readonly skuId: SkuId,
        public readonly availabilityRegion: AvailabilityRegion
    ) {
        this._id = new StockId(
            skuId,
            availabilityRegion.id
        )
    }

    public get id(): StockId {
        return this._id;
    }

    public static fromPrimitives(data: StockDTO): Stock {
        return new Stock(
            StockState.fromValue(data.state),
            new SkuId(data.skuId),
            AvailabilityRegion.fromPrimitives(data.availabilityRegion)
        )
    }

    toPrimitives(): StockDTO {
        return new StockDTO(
            this.state.value,
            this.skuId.value,
            this.availabilityRegion.toPrimitives()
        )
    }
}