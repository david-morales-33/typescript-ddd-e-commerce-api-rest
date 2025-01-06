import { EntitySchema } from "typeorm";
import { PriceDTO } from "../../../domain/PriceDTO";

export const PriceSchema = new EntitySchema<PriceDTO>({
    name: 'PriceDTO',
    tableName: 'tbl_price',
    target: PriceDTO,
    columns: {
        id: {
            type: String,
            name: 'prc_id',
            primary: true
        },
        value: {
            type: Number,
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
            target: "SkuDTO",
            joinColumn: {
                name: 'sku_id',
                referencedColumnName: 'id'
            }
        }
    }
})