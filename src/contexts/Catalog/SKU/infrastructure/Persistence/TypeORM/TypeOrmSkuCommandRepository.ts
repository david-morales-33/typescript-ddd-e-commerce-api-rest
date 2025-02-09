import { EntitySchema } from "typeorm";
import { TypeOrmRepository } from "../../../../../Shared/infrastructure/Persistence/TypeORM/TypeOrmRepository";
import { SkuCommandRepository } from "../../../domain/SkuCommandRepository";
import { SkuDecorator } from "./SkuDecorator";
import { SkuSchema } from "./SkuSchema.entity";
import { Sku } from "../../../domain/Sku";
import { SkuMapper } from "./SkuMapper";

export class TypeOrmSkuCommandRepository 
extends TypeOrmRepository<SkuDecorator>
implements SkuCommandRepository {
    protected entitySchema(): EntitySchema<SkuDecorator> {
        return SkuSchema;
    }

    async save(sku: Sku): Promise<void> {
        const repository = await this.repository();
        const skuSchema = SkuMapper.convertFromDomainObject(sku)
        await repository.save(skuSchema)
    }
}