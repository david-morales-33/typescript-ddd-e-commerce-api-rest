import { EntitySchema } from "typeorm";
import { AvailabilityRegionDTO } from "../../../domain/AvailabilityRegionDTO";

export const AvailabilityRegionSchema = new EntitySchema<AvailabilityRegionDTO>({
    name: 'AvailabilityRegionDTO',
    tableName: 'tbl_availability_region',
    target: AvailabilityRegionDTO,
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