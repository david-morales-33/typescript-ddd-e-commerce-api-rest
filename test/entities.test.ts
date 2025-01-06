import { AvailabilityRegionDTO } from "../src/contexts/Catalog/AvailabilityRegion/domain/AvailabilityRegionDTO";
import { PriceDTO } from "../src/contexts/Catalog/Price/domain/PriceDTO";
import { PromotionalSettingsDTO } from "../src/contexts/Catalog/PromotionalSettings/domain/PromotionalSettingsDTO";
import { SkuDTO } from "../src/contexts/Catalog/SKU/domain/SkuDTO";
import { SkuAttributeDTO } from "../src/contexts/Catalog/SKUAttribute/domain/SkuAttributeDTO";
import { StockDTO } from "../src/contexts/Catalog/Stock/domain/StockDTO";
import { Uuid } from "../src/contexts/Shared/domain/value-objects/Uuid";
import { TypeOrmClientFactory } from "../src/contexts/Shared/infrastructure/Persistence/TypeORM/TypeOrmClientFactory";

async function main() {
    try {
        const connection = await TypeOrmClientFactory.createClient({
            // host: 'localhost',
            // database: 'gestion_e_commerce',
            // port: 1433,
            // username: 'sa',
            // password: 'Sistemas-2020'
        });

        const skuId = Uuid.random().value;
        const avlb = new AvailabilityRegionDTO(
            "4ba7909e-eed5-4e6b-8ab0-ff676dfd857a",
            "Medellin",
            "1146441925",
            new Date()
        );
        const price = new PriceDTO(Uuid.random().value, 15000.23, "COP", new Date(), new Date(), skuId);
        const promotional = new PromotionalSettingsDTO(
            Uuid.random().value,
            "Navidad",
            0.2,
            new Date(),
            new Date(),
            skuId
        );
        const attribute1 = new SkuAttributeDTO(Uuid.random().value, "Grande", skuId);
        const attribute2 = new SkuAttributeDTO(Uuid.random().value, "Blanco", skuId);
        const attribute3 = new SkuAttributeDTO(Uuid.random().value, "USB", skuId);

        const stock = new StockDTO(Uuid.random().value, skuId, "Available", avlb);
        const sku = new SkuDTO(
            skuId,
            "Teclado mecánico",
            "Enable",
            Uuid.random().value,
            price,
            promotional,
            [stock],
            [attribute1, attribute2, attribute3]
        );
        const skuRepo = connection.getRepository("SkuDTO");
        const response = await skuRepo.find({
            relations:[
                "attributesList",
                "priceBase",
                "promotionalSettings",
                "stockList"
            ]
        })
        console.log(response)

    } catch (error) {
        console.log(error);
    }
}

main();