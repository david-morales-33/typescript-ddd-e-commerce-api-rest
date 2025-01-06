import { EntitySchema } from "typeorm";
import { SkuDTO } from "../../../domain/SkuDTO";

export const SkuSchema = new EntitySchema<SkuDTO>({
    name: 'SkuDTO',
    tableName: 'tbl_sku',
    target: SkuDTO,
    columns: {
        id: {
            type: String,
            name: 'sku_id',
            primary: true
        },
        value: {
            type: String,
            name: 'sku_value'
        },
        state: {
            type: String,
            name: 'sku_state'
        }
    },
    relations: {
        priceBase: {
            type: "one-to-one",
            target: "PriceDTO",
            inverseSide: "skuId",
            cascade: true
        },
        promotionalSettings: {
            type: "one-to-one",
            target: "PromotionalSettingsDTO",
            inverseSide: "skuId",
            cascade: true
        },
        stockList: {
            type: "one-to-many",
            target: "StockDTO",
            inverseSide: "skuId",
            cascade: true
        },
        attributesList: {
            type: "one-to-many",
            target: "SkuAttributeDTO",
            inverseSide: "skuId",
            cascade: true,
        }
    }
})