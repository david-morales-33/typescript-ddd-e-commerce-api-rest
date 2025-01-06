import { EntitySchema } from "typeorm";
import { SkuAttributeDecorator } from "./SkuAttributeDecorator";

export const SkuAttributeSchema = new EntitySchema<SkuAttributeDecorator>({
    name: 'SkuAttributeDecorator',
    tableName: 'tbl_sku_attribute',
    target: SkuAttributeDecorator,
    columns: {
        id: {
            type: String,
            name: 'str_id',
            primary: true
        },
        label: {
            type: String,
            name: 'str_label'
        }
    },
    relations: {
        skuId: {
            type: "many-to-one",
            target: "SkuDecorator",
            joinColumn: {
                name: 'sku_id',
                referencedColumnName: 'id'
            }
        }
    }
})