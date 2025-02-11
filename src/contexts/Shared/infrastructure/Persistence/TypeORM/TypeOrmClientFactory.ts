import { DataSource } from 'typeorm';
import { TypeOrmConfig } from './TypeOrmConfig';
import { AvailabilityRegionSchema } from '../../../../Catalog/AvailabilityRegion/infrastructure/Persistence/TypeORM/AvailabilityRegionSchema.entity';
import { CategorySchema } from '../../../../Catalog/Category/infrastructure/Persistence/TypeORM/CategorySchema.entity';
import { PriceSchema } from '../../../../Catalog/Price/infrastructure/Persitence/TypeORM/PriceSchema.entity';
import { PromotionalSettingsSchema } from '../../../../Catalog/PromotionalSettings/infrastructure/Persistence/TypeORM/PromotionalSettingsSchema.entity';
import { StockSchema } from '../../../../Catalog/Stock/infrastructure/Persistence/TypeORM/StockSchema.entity';
import { SkuAttributeSchema } from '../../../../Catalog/SKUAttribute/infrastructure/Persistence/TypeORM/SkuAttributeSchema.entity';
import { SkuSchema } from '../../../../Catalog/SKU/infrastructure/Persistence/TypeORM/SkuSchema.entity';
import { ProductSchema } from '../../../../Catalog/Product/infrastructure/Persistence/TypeORM/ProductSchema.entity';
import { UpdateEventProductSchema } from '../../../../Catalog/UpdateEvent/infrastructure/Persistence/TypeORM/UpdateEventProductSchema.entity';
import { SpecificationSchema } from '../../../../Catalog/Specification/infrastructure/Persistence/TypeORM/SpecificationSchema.entity';
import { MediaFileSchema } from '../../../../Catalog/MediaFile/infrastructure/Persistence/TypeORM/MediaFileSchema.entity';
import { LabelSchema } from '../../../../Catalog/Label/infrastructure/Persistence/TypeORM/LabelSchema.entity';

export class TypeOrmClientFactory {
    static async createClient(config: TypeOrmConfig): Promise<DataSource> {
        try {
            const connection = new DataSource({
                name: 'E-Commerce',
                type: 'mssql',
                host: config.host,
                port: config.port,
                username: config.username,
                password: config.password,
                database: config.database,
                options: {
                    encrypt: true,
                    trustServerCertificate: true
                },
                entities: [
                    AvailabilityRegionSchema,
                    PriceSchema,
                    PromotionalSettingsSchema,
                    StockSchema,
                    SkuAttributeSchema,
                    SkuSchema,
                    ProductSchema,
                    UpdateEventProductSchema,
                    SpecificationSchema,
                    MediaFileSchema,
                    CategorySchema,
                    LabelSchema,
                    
                ],
                synchronize: true,
            });
            await connection.initialize();
            return connection;
        } catch (error) {
            throw new Error('Data base connection faild: ' + error)
        }
    }
}
