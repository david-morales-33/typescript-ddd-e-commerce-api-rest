import { EntitySchema } from "typeorm";
import { CategoryDecorator } from "./CategoryDecorator";

export const CategorySchema = new EntitySchema<CategoryDecorator>({
    name: 'CategoryDecorator',
    tableName: 'tbl_category',
    target: CategoryDecorator,
    columns: {
        id: {
            type: String,
            primary: true,
            name: 'ctg_id'
        },
        value: {
            type: String,
            name: 'ctg_label'
        },
        level: {
            type: String,
            name: 'ctg_level'
        },
        description: {
            type: String,
            name: 'ctg_description'
        },
        createBy: {
            type: String,
            name: 'ctg_create_by'
        },
        createAt: {
            type: Date,
            name: 'ctg_create_at'
        }
    }
})