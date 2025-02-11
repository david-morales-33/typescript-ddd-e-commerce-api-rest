import { EntitySchema } from "typeorm";
import { UpdateEventDecorator } from "./UpdateEventDecorator";

export const UpdateEventProductSchema = new EntitySchema<UpdateEventDecorator>({
    name: "UpdateEventDecorator",
    tableName: "tbl_update_event_product",
    columns: {
        id: {
            type: String,
            name: "upd_id",
            primary: true
        },
        description:{
            type: String,
            name: "upd_description"
        },
        date:{
            type: Date,
            name: "upd_create_at"
        },
        updatedField:{
            type: String,
            name: "upd_field"
        },
        previusValue: {
            type: String,
            name: "upd_value",
        },
        newValue:{
            type: String,
            name: "upd_new_value"
        },
        updatedBy:{
            type: String,
            name: "upd_update_by"
        }
    },
    relations:{
        fk:{
            type:"many-to-one",
            target:"ProductDecorator",
            joinColumn:{
                name: "prd_id",
                referencedColumnName: "id"
            }
        }
    }
}) 