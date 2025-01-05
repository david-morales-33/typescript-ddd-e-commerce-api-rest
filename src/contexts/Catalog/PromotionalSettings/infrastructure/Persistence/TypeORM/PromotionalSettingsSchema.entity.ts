import { EntitySchema } from "typeorm";
import { PromotionalSettingsDTO } from "../../../domain/PromotionalSettingsDTO";

export const PromotionalSettingsSchema = new EntitySchema<PromotionalSettingsDTO>({
    name: 'PromotionalSettingsDTO',
    tableName: 'tbl_promotional_settings',
    target: PromotionalSettingsDTO,
    columns: {
        id: {
            type: String,
            name: 'prm_id',
            primary: true
        },
        type: {
            type: String,
            name: 'prm_type'
        },
        percentage: {
            type: Number,
            name: 'prm_percentage'
        },
        initialDate: {
            type: Date,
            name: 'prm_initial_date'
        },
        finalDate: {
            type: Date,
            name: 'prm_final_date'
        }
    },
    relations: {
        skuId: {
            target: 'SkuDTO',
            type: "one-to-one",
            joinColumn: {
                name: 'prm_sku_id',
                referencedColumnName: 'id'
            }
        }
    }
})