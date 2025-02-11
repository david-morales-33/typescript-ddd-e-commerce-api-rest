import { Category } from "../../../domain/Category";
import { CategoryDecorator } from "./CategoryDecorator";

export class CategoryMapper {
    public static convertFromPersistenceObject(entity: CategoryDecorator): Category {
        return Category.fromPrimitives(entity);
    }
    public static convertFromDomainObject(entity: Category): CategoryDecorator {
        return new CategoryDecorator(
            entity.id.value,
            entity.value.value,
            entity.level.value,
            entity.description.value,
            entity.createby.value,
            entity.createAt.value
        )
    }
}