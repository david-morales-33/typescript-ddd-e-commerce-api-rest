import { TypeOrmRepository } from "../../../../../Shared/infrastructure/Persistence/TypeORM/TypeOrmRepository";
import { AvailabilityRegion } from "../../../domain/AvailabilityRegion";
import { AvailabilityRegionQueryRepository } from "../../../domain/AvailabilityRegionQueryRepository";
import { AvailabilityRegionDecorator } from "./AvailabilityRegionDecorator";
import { AvailabilityRegionMapper } from "./AvailabilityRegionMapper";
import { AvailabilityRegionSchema } from "./AvailabilityRegionSchema.entity";

export class TypeORMAvailabilityRegionQueryRepository
    extends TypeOrmRepository<AvailabilityRegionDecorator>
    implements AvailabilityRegionQueryRepository {

    protected entitySchema() {
        return AvailabilityRegionSchema;
    }

    async searchAll(): Promise<AvailabilityRegion[]> {
        const repository = await this.repository();
        const response = await repository.find();
        return response.map(entry => AvailabilityRegionMapper.convertFromPersistenceObject(entry));
    }
}