import { EntitySchema } from "typeorm";
import { AvailabilityRegionDecorator } from "./AvailabilityRegionDecorator";

export const AvailabilityRegionSchema = new EntitySchema<AvailabilityRegionDecorator>({
    name: 'AvailabilityRegionDecorator',
    tableName: 'tbl_availability_region',
    target: AvailabilityRegionDecorator,
    columns: {
        id: {
            type: String,
            name: 'avr_id',
            primary: true,
        },
        region: {
            type: String,
            name: 'avr_region'
        },
        createBy: {
            type: String,
            name: 'avr_create_by'
        },
        createAt: {
            type: Date,
            name: 'avr_create_at'
        }
    }
})