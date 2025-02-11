import { EntitySchema } from "typeorm";
import { ProductDecorator } from "./ProductDecorator";

export const ProductSchema = new EntitySchema<ProductDecorator>({
    name: 'ProductDecorator',
    tableName: "tbl_product",
    columns: {
        id: {
            type: String,
            name: "prd_id",
            primary: true
        },
        name: {
            type: String,
            name: "prd_name",
        },
        state: {
            type: String,
            name: "prd_state"
        },
        description: {
            type: String,
            name: "prd_description",
            nullable: true
        },
        createBy: {
            type: String,
            name: "prd_create_by"
        },
        createAt: {
            type: Date,
            name: "prd_create_at"
        }
    },
    relations: {
        complements: {
            type: "many-to-one",
            target: "ProductDecorator",
            joinColumn: {
                name: "prd_complement_child",
                referencedColumnName: 'id'
            },
            nullable: true,
            inverseSide: "complements"
        },
        modificationEvent: {
            type: "one-to-many",
            target: "UpdateEventDecorator",
            inverseSide: "fk"
        },
        specification: {
            type: "one-to-many",
            target: "SpecificationDecorator",
            inverseSide: "productId"
        },
        mediaFile: {
            type: "one-to-many",
            target: "MediaFileDecorator",
            inverseSide: "productId"
        },
        category: {
            type: "many-to-many",
            target: "CategoryDecorator",
            joinTable: {
                name: "tbl_product_x_category",
                joinColumn: {
                    referencedColumnName: 'id',
                    name: 'prd_id'
                },
                inverseJoinColumn: {
                    referencedColumnName: 'id',
                    name: 'ctg_id'
                }
            }
        },
        label: {
            type: "many-to-many",
            target: "LabelDecorator",
            joinTable: {
                name: "tbl_product_x_label",
                joinColumn: {
                    referencedColumnName: 'id',
                    name: 'prd_id'
                },
                inverseJoinColumn: {
                    referencedColumnName: 'id',
                    name: 'lbl_id'
                }
            }
        },
        // sku: {
        //     type: "one-to-many",
        //     target: "SkuDecorator",
        //     inverseSide: "productId"
        // },

    }
});