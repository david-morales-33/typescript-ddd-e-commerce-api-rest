import { EntitySchema } from "typeorm";
import { SkuAttributeDTO } from "../../../domain/SkuAttributeDTO";

export const SkuAttributeSchema = new EntitySchema<SkuAttributeDTO>({
    name: 'SkuAttributeDTO',
    tableName: 'tbl_sku_attribute',
    target: SkuAttributeDTO,
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
            target: "SkuDTO",
            joinColumn: {
                name: 'sku_id',
                referencedColumnName: 'id'
            },
            inverseSide: "SkuAttributeDTO"
        }
    }
})