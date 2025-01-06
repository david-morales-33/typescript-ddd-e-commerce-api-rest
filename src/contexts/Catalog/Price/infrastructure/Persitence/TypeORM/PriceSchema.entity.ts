import { EntitySchema } from "typeorm";
import { PriceDecorator } from "./PriceDecorator";

export const PriceSchema = new EntitySchema<PriceDecorator>({
    name: 'PriceDecorator',
    tableName: 'tbl_price',
    target: PriceDecorator,
    columns: {
        id: {
            type: String,
            name: 'sku_id',
            primary: true
        },
        value: {
            type: "money",
            name: 'prc_value'
        },
        currency: {
            type: String,
            name: 'prc_currency'
        },
        initialDate: {
            type: Date,
            name: 'prc_initial_date'
        },
        finalDate: {
            type: Date,
            name: 'prc_final_date'
        }
    },
    relations: {
        skuId: {
            type: "one-to-one",
            target: "SkuDecorator",
            joinColumn: {
                name: 'sku_id',
                referencedColumnName: 'id'
            }
        }
    }
})