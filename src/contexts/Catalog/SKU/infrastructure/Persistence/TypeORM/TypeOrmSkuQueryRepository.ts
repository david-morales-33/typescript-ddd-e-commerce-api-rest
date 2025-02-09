import { EntitySchema } from "typeorm";
import { TypeOrmRepository } from "../../../../../Shared/infrastructure/Persistence/TypeORM/TypeOrmRepository";
import { Sku } from "../../../domain/Sku";
import { SkuId } from "../../../domain/SkuId";
import { SkuQueryRepository } from "../../../domain/SkuQueryRepository";
import { SkuDecorator } from "./SkuDecorator";
import { SkuSchema } from "./SkuSchema.entity";
import { SkuMapper } from "./SkuMapper";

export class TypeOrmSkuQueryRepository
    extends TypeOrmRepository<SkuDecorator>
    implements SkuQueryRepository {

    protected entitySchema(): EntitySchema<SkuDecorator> {
        return SkuSchema;
    }
    async find(skuId: SkuId): Promise<Sku | null> {
        const repository = await this.repository();
        const response = await repository.findOneBy({ "id": skuId.value })
        if (response === null) return null
        return SkuMapper.convertFromPersistenceObject(response);
    }
}