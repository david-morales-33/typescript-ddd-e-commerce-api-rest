import { EntitySchema } from "typeorm";
import { StockDTO } from "../../../domain/StockDTO";

export const StockSchema = new EntitySchema<StockDTO>({
    name: 'StockDTO',
    tableName: 'tbl_stock',
    target: StockDTO,
    columns: {
        id: {
            type: String,
            name: 'stk_id',
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
            target: 'SkuDTO',
            joinColumn: {
                name: 'sku_id',
                referencedColumnName: 'id'
            }
        },
        availabilityRegion: {
            type: "one-to-one",
            target: "AvailabilityRegionDTO",
            joinColumn: {
                name: 'avr_id',
                referencedColumnName: 'id'
            }
        }
    }
})