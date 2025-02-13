import { AvailabilityRegionDTO } from '../src/contexts/Catalog/AvailabilityRegion/domain/AvailabilityRegionDTO';
import { TypeORMCategoryQueryRepository } from '../src/contexts/Catalog/Category/infrastructure/Persistence/TypeORM/TypeORMCategoryQueryRepository';
import { PriceDTO } from '../src/contexts/Catalog/Price/domain/PriceDTO';
import { PromotionalSettingsDTO } from '../src/contexts/Catalog/PromotionalSettings/domain/PromotionalSettingsDTO';
import { TypeormConfigFactory } from '../src/contexts/Catalog/Shared/infrastructure/Persistence/TypeORM/TypeormConfigFactory';
import { Sku } from '../src/contexts/Catalog/SKU/domain/Sku';
import { SkuDTO } from '../src/contexts/Catalog/SKU/domain/SkuDTO';
import { SkuId } from '../src/contexts/Catalog/SKU/domain/SkuId';
import { TypeOrmSkuQueryRepository } from '../src/contexts/Catalog/SKU/infrastructure/Persistence/TypeORM/TypeOrmSkuQueryRepository';
import { SkuAttributeDTO } from '../src/contexts/Catalog/SKUAttribute/domain/SkuAttributeDTO';
import { StockDTO } from '../src/contexts/Catalog/Stock/domain/StockDTO';
import { Uuid } from '../src/contexts/Shared/domain/value-objects/Uuid';
import { TypeOrmClientFactory } from '../src/contexts/Shared/infrastructure/Persistence/TypeORM/TypeOrmClientFactory';
import { containerPromise } from '../src/server/Catalog/dependecy-inyection';

(async () => {
    // const connecEnv = TypeormConfigFactory.crateConfig();
    // const client = TypeOrmClientFactory.createClient(connecEnv);
    // const query = new TypeORMCategoryQueryRepository(client);

    // const repo = new TypeOrmSkuCommandRepository(client);
    // const query = new TypeOrmSkuQueryRepository(client);
    try {
        const container = await containerPromise;
        const ent = container.get("Catalog.Shared.ConnectionManager")
        // const skuId = Uuid.random().value;
        // const avlb = new AvailabilityRegionDTO(
        //     "40228f26-48fc-4dfa-998b-8d8a591e4ff3",
        //     "Medellin",
        //     "1146441925",
        //     new Date()
        // );
        // const price = new PriceDTO(Uuid.random().value, 350000.00, "Colombian Peso", new Date(), new Date());
        // const promotional = new PromotionalSettingsDTO(
        //     Uuid.random().value,
        //     "Black friday",
        //     0.18,
        //     new Date(),
        //     new Date(),
        //     '1146441925',
        //     new Date()
        // );

        // const attribute1 = new SkuAttributeDTO(Uuid.random().value, "LCD");
        // const attribute2 = new SkuAttributeDTO(Uuid.random().value, "Negro");
        // const attribute3 = new SkuAttributeDTO(Uuid.random().value, "22 pulgadas");
        // const attribute4 = new SkuAttributeDTO(Uuid.random().value, "2K");
        // const stock = new StockDTO(Uuid.random().value, "Available", avlb);
        // const sku = new SkuDTO(
        //     skuId,
        //     "Monitor (Commún)",
        //     "Available",
        //     price,
        //     [stock],
        //     [attribute1, attribute2, attribute3, attribute4],
        //     [promotional]
        // );
        // const skuObj = Sku.fromPrimitives(sku)
        // await repo.save(skuObj);
        // const response = await query.find(new SkuId('4ec62d91-ae51-41b1-832f-3de975aa174e'));
        // const rsponse = await query.searchAll();
        console.log(ent);
    } catch (err) {
        console.log(err)
    } finally {
        // (await client).destroy();
    }
})()