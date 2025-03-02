import { AvailabilityRegionDecorator } from "../../../../AvailabilityRegion/infrastructure/Persistence/TypeORM/AvailabilityRegionDecorator";
import { PromotionalSettingsDecorator } from "../../../../PromotionalSettings/infrastructure/Persistence/TypeORM/PromotionalSettingsDecorator";
import { SkuAttributeDecorator } from "../../../../SKUAttribute/infrastructure/Persistence/TypeORM/SkuAttributeDecorator";
import { StockDecorator } from "../../../../Stock/infrastructure/Persistence/TypeORM/StockDecorator";
import { Sku } from "../../../domain/Sku";
import { SkuDTO } from "../../../domain/SkuDTO";
import { SkuDecorator } from "./SkuDecorator";

export class SkuMapper {
    public static convertFromPersistenceObject(entity: SkuDecorator): Sku {
        return Sku.fromPrimitives(entity)
    }

    public static convertFromDomainObject(entity: Sku): SkuDecorator {
        const obj = entity.toPrimitives()
        const skuId = obj.id;
        const attributeSkuList = obj.attributesList.map(entry => new SkuAttributeDecorator(entry.id, entry.label, skuId));
        const stokList = obj.stockList.map(entry => new StockDecorator(
            entry.id,
            entry.state,
            new AvailabilityRegionDecorator(
                entry.availabilityRegion.id,
                entry.availabilityRegion.region,
                entry.availabilityRegion.createBy,
                entry.availabilityRegion.createAt),
            skuId
        ));
        const promotionalSettingsList = obj.promotionalSettings.map(entry => new PromotionalSettingsDecorator(
            entry.id,
            entry.type,
            entry.percentage,
            entry.initialDate,
            entry.finalDate,
            entry.createBy,
            entry.createAt,
            skuId
        ));
        return new SkuDecorator(
            '', 
            skuId, 
            obj.value, 
            obj.state, 
            obj.priceBase, 
            promotionalSettingsList, 
            stokList, 
            attributeSkuList
        );

    }
}