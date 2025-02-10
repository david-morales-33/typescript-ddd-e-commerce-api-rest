import { EntitySchema } from "typeorm";
import { StockDecorator } from "./StockDecorator";

export const StockSchema = new EntitySchema<StockDecorator>({
    name: 'StockDecorator',
    tableName: 'tbl_stock',
    target: StockDecorator,
    columns: {
        skuId:{
            type: String,
            name: 'sku_id',
            primary: true
        },
        availabilityRegion:{
            type: String,
            name: 'avr_id',
            primary: true
        },
        state: {
            type: String,
            name: 'skt_state'
        }
    },
    relations: {
        skuId: {
            type: "many-to-one",
            target: 'SkuDecorator',
            joinColumn: {
                name: 'sku_id',
                referencedColumnName: 'id'
            }
        },
        availabilityRegion: {
            type: "many-to-one",
            target: "AvailabilityRegionDecorator",
            joinColumn: {
                name: 'avr_id',
                referencedColumnName: 'id'
            }
        }
    }
})