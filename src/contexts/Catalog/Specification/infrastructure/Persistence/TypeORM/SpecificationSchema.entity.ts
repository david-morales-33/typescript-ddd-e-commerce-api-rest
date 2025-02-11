import { EntitySchema } from "typeorm";
import { SpecificationDecorator } from "./SpecificationDecorator";

export const SpecificationSchema = new EntitySchema<SpecificationDecorator>({
    name: "SpecificationDecorator",
    tableName: "tbl_specification",
    columns: {
        id: {
            type: String,
            name: "spc_id",
            primary: true
        },
        name: {
            type: String,
            name: "spc_value"
        }
    },
    relations: {
        productId: {
            type: "many-to-one",
            target: "ProductDecorator",
            joinColumn: {
                name: "prd_id",
                referencedColumnName: "id"
            }
        }
    }
})