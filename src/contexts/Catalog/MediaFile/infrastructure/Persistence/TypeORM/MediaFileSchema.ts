import { EntitySchema } from "typeorm";
import { MediaFileDecorator } from "./MediaFileDecorator";

export const MediaFileSchema = new EntitySchema<MediaFileDecorator>({
    name: "MediaFileDecorator",
    tableName: "tbl_media_file",
    target: MediaFileDecorator,
    columns: {
        id: {
            type: String,
            name: 'mdf_id',
            primary: true
        },
        type: {
            type: String,
            name: 'mdf_type',
        },
        url: {
            type: "text",
            name: "mdf_url"
        },
        description: {
            type: String,
            name: "mdf_description"
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