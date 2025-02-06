import { EntitySchema } from "typeorm";
import { PromotionalSettingsDecorator } from "./PromotionalSettingsDecorator";

export const PromotionalSettingsSchema = new EntitySchema<PromotionalSettingsDecorator>({
    name: 'PromotionalSettingsDecorator',
    tableName: 'tbl_promotional_settings',
    target: PromotionalSettingsDecorator,
    columns: {
        id: {
            type: String,
            name: 'sku_id',
            primary: true
        },
        type: {
            type: String,
            name: 'prm_type'
        },
        percentage: {
            type: "float",
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
            target: 'SkuDecorator',
            type: "many-to-one",
            joinColumn: {
                name: 'sku_id',
                referencedColumnName: 'id'
            }, 
            inverseSide: "id"
        }
    }
})