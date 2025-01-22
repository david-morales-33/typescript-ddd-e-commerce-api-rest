import { UserId } from "../../../../Shared/domain/value-objects/UserId";
import { Category } from "../../domain/Category";
import { CategoryCommandRepository } from "../../domain/CategoryCommandRepository";
import { CategoryCreationDate } from "../../domain/CategoryCreationDate";
import { CategoryDescription } from "../../domain/CategoryDescription";
import { CategoryId } from "../../domain/CategoryId";
import { CategoryLevel } from "../../domain/CategoryLevel";
import { CategoryValue } from "../../domain/CategoryValue";

export class CategoryCreator {
    constructor(private repository: CategoryCommandRepository) { }
    async execute(
        id: CategoryId,
        value: CategoryValue, 
        level: CategoryLevel, 
        description: CategoryDescription, 
        createBy: UserId,
        createAt: CategoryCreationDate
    ) {

        const newCategory = Category.create(
            id,
            value,
            level,
            description,
            createBy,
            createAt
        )
        return await this.repository.save(newCategory);
    }
}