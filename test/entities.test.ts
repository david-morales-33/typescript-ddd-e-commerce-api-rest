import { AvailabilityRegionDTO } from "../src/contexts/Catalog/AvailabilityRegion/domain/AvailabilityRegionDTO";
import { PriceDTO } from "../src/contexts/Catalog/Price/domain/PriceDTO";
import { PromotionalSettingsDTO } from "../src/contexts/Catalog/PromotionalSettings/domain/PromotionalSettingsDTO";
import { Sku } from "../src/contexts/Catalog/SKU/domain/Sku";
import { SkuDTO } from "../src/contexts/Catalog/SKU/domain/SkuDTO";
import { SkuDecorator } from "../src/contexts/Catalog/SKU/infrastructure/Persistence/TypeORM/SkuDecorator";
import { SkuAttributeDTO } from "../src/contexts/Catalog/SKUAttribute/domain/SkuAttributeDTO";
import { StockDTO } from "../src/contexts/Catalog/Stock/domain/StockDTO";
import { Uuid } from "../src/contexts/Shared/domain/value-objects/Uuid";
import { TypeOrmClientFactory } from "../src/contexts/Shared/infrastructure/Persistence/TypeORM/TypeOrmClientFactory";

async function main() {
    const connection = await TypeOrmClientFactory.createClient({
        host: 'localhost',
        database: 'gestion_e_commerce',
        port: 1433,
        username: 'sa',
        password: 'Sistemas-2020'
    });
    try {

        const skuId = Uuid.random().value;
        const avlb = new AvailabilityRegionDTO(
            "4ba7909e-eed5-4e6b-8ab0-ff676dfd857a",
            "Medellin",
            "1146441925",
            new Date()
        );

        const price = new PriceDTO(Uuid.random().value, 15000.23, "COP", new Date(), new Date());
        const promotional = new PromotionalSettingsDTO(
            Uuid.random().value,
            "Navidad",
            0.2,
            new Date(),
            new Date(),
        );
        const attribute1 = new SkuAttributeDTO(Uuid.random().value, "Grande");
        const attribute2 = new SkuAttributeDTO(Uuid.random().value, "Blanco");
        const attribute3 = new SkuAttributeDTO(Uuid.random().value, "USB");

        const stock = new StockDTO(Uuid.random().value, "Available", avlb);
        const sku = new SkuDTO(
            skuId,
            "Teclado mecánico",
            "Enable",
            price,
            promotional,
            [stock],
            [attribute1, attribute2, attribute3]
        );
        const skuRepo = connection.getRepository("SkuDecorator");
        const avbRepo = connection.getRepository("AvailabilityRegionDecorator");
        // await avbRepo.save(avlb);
        // await skuRepo.save(sku);
        const response = await skuRepo.find({
            relations: [
                // "attributesList",
                "priceBase",
                "promotionalSettings",
                "stockList",
                "stockList.availabilityRegion"
            ]
        })
        // const skuentity = Sku.fromPrimitives(response[0] as SkuDecorator);
        // console.log(skuentity.toPrimitives())
    } catch (error) {
        console.log(error);
    } finally { await connection.destroy() }
}

main();