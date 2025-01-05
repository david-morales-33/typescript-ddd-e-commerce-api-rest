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
        productId: {
            type: "one-to-one",
            target: "PriceDTO"
        },
        promotionalSettings: {
            type: "one-to-one",
            target: "PromotionalSettingsDTO"
        },
        stockList: {
            type: "one-to-many",
            target: "StockDTO"
        },
        attributesList: {
            type: "one-to-many",
            target: "SkuAttributeDTO"
        }
    }
})