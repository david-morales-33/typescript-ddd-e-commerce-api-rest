import { EntitySchema } from "typeorm";
import { LabelDecorator } from "./LabelDecorator";

export const LabelSchema = new EntitySchema<LabelDecorator>({
    name: 'LabelDecorator',
    tableName: 'tbl_label',
    target: LabelDecorator,
    columns: {
        id: {
            type: String,
            name: "lbl_id",
            primary: true
        },
        value: {
            type: String,
            name: "lbl_label"
        }
    }
})