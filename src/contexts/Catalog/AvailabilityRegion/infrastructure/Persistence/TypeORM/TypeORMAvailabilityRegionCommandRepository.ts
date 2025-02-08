import { EntitySchema } from "typeorm";
import { TypeOrmRepository } from "../../../../../Shared/infrastructure/Persistence/TypeORM/TypeOrmRepository";
import { AvailabilityRegion } from "../../../domain/AvailabilityRegion";
import { AvailabilityRegionCommandRepository } from "../../../domain/AvailabilityRegionCommandRepository";
import { AvailabilityRegionDecorator } from "./AvailabilityRegionDecorator";
import { AvailabilityRegionSchema } from "./AvailabilityRegionSchema.entity";
import { AvailabilityRegionMapper } from "./AvailabilityRegionMapper";

export class TypeORMAvailabilityRegionCommandRepository
    extends TypeOrmRepository<AvailabilityRegionDecorator>
    implements AvailabilityRegionCommandRepository {

    protected entitySchema(): EntitySchema<AvailabilityRegionDecorator> {
        return AvailabilityRegionSchema;
    }
    async save(AvailabilityRegion: AvailabilityRegion): Promise<void> {
        const availabilityRegionSchema = AvailabilityRegionMapper.convertFromDomainObject(AvailabilityRegion);
        await this.persist(availabilityRegionSchema);
    }
}