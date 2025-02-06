import { EntitySchema } from "typeorm";
import { SkuDecorator } from "./SkuDecorator";

export const SkuSchema = new EntitySchema<SkuDecorator>({
    name: 'SkuDecorator',
    tableName: 'tbl_sku',
    target: SkuDecorator,
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
            target: "PriceDecorator",
            inverseSide: "skuId",
            cascade: true
        },
        promotionalSettings: {
            type: "one-to-many",
            target: "PromotionalSettingsDecorator",
            inverseSide: "skuId",
            cascade: true
        },
        stockList: {
            type: "one-to-many",
            target: "StockDecorator",
            inverseSide: "skuId",
            cascade: true
        },
        attributesList: {
            type: "one-to-many",
            target: "SkuAttributeDecorator",
            inverseSide: "skuId",
            cascade: true,
        }
    }
})