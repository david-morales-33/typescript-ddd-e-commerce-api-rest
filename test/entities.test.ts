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
        const repo = new TypeORMAvailabilityRegionQueryRepository(TypeOrmClientFactory.createClient(connecEnv));
        const response = await repo.searchAll();
        console.log(response)
    } catch (err) {
        console.log(err)
    }
})()