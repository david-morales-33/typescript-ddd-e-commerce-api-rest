import { AvailabilityRegion } from '../src/contexts/Catalog/AvailabilityRegion/domain/AvailabilityRegion';
import { AvailabilityRegionDTO } from '../src/contexts/Catalog/AvailabilityRegion/domain/AvailabilityRegionDTO';
import { TypeORMAvailabilityRegionCommandRepository } from '../src/contexts/Catalog/AvailabilityRegion/infrastructure/Persistence/TypeORM/TypeORMAvailabilityRegionCommandRepository';
import { TypeORMAvailabilityRegionQueryRepository } from '../src/contexts/Catalog/AvailabilityRegion/infrastructure/Persistence/TypeORM/TypeORMAvailabilityRegionQueryRepository';
import { TypeOrmClientFactory } from '../src/contexts/Shared/infrastructure/Persistence/TypeORM/TypeOrmClientFactory';
import { EnviromentConfig } from '../src/server/Catalog/EnviromentConfig';

(async () => {
    try {
        const env = new EnviromentConfig();
        const connecEnv = {
            username: env.DB_USER,
            host: env.DB_HOST,
            password: env.DB_PASSWORD,
            database: env.DB_DATABASE,
            port: parseInt(env.DB_PORT)
        }
        // const ds = await TypeOrmClientFactory.createClient(connecEnv);
        const repo = new TypeORMAvailabilityRegionCommandRepository(TypeOrmClientFactory.createClient(connecEnv));

        const obj = new AvailabilityRegionDTO(
            '7f7c83ad-fdce-4aa5-9ba9-dbaa419290c6',
            'Barranquilla',
            '1146441925',
            new Date()
        )
        const domainObj = AvailabilityRegion.fromPrimitives(obj);
        await repo.save(domainObj);
    } catch (err) {
        console.log(err)
    }
})()