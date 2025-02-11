import { EntitySchema } from "typeorm";
import { TypeOrmRepository } from "../../../../../Shared/infrastructure/Persistence/TypeORM/TypeOrmRepository";
import { CategoryQueryRepository } from "../../../domain/CategoryQueryRepository";
import { CategoryDecorator } from "./CategoryDecorator";
import { CategorySchema } from "./CategorySchema.entity";
import { Category } from "../../../domain/Category";
import { CategoryMapper } from "./CategoryMapper";

export class TypeORMCategoryQueryRepository
    extends TypeOrmRepository<CategoryDecorator>
    implements CategoryQueryRepository {
    protected entitySchema(): EntitySchema<CategoryDecorator> {
        return CategorySchema;
    }

    async searchAll(): Promise<Category[]> {
        const repository = await this.repository();
        const response = await repository.find();

        return response.map(CategoryMapper.convertFromPersistenceObject);
    }
}