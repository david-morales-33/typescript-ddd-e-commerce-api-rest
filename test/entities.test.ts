import { TypeORMAvailabilityRegionQueryRepository } from '../src/contexts/Catalog/AvailabilityRegion/infrastructure/Persistence/TypeORM/TypeORMAvailabilityRegionQueryRepository';
import { SkuId } from '../src/contexts/Catalog/SKU/domain/SkuId';
import { TypeOrmSkuQueryRepository } from '../src/contexts/Catalog/SKU/infrastructure/Persistence/TypeORM/TypeOrmSkuQueryRepository';
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
        const repo = new TypeOrmSkuQueryRepository(TypeOrmClientFactory.createClient(connecEnv));
        const skuId = new SkuId('6a055507-4698-4884-b6f5-20b328f442c8');
        await repo.find(skuId);

    } catch (err) {
        console.log(err)
    }
})()