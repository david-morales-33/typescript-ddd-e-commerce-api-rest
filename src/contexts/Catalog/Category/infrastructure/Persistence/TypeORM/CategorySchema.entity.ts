import { EntitySchema } from "typeorm";
import { CategoryDTO } from "../../../domain/CategoryDTO";

export const CategorySchema = new EntitySchema<CategoryDTO>({
    name: 'CategoryDTO',
    tableName: 'tbl_category',
    target: CategoryDTO,
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