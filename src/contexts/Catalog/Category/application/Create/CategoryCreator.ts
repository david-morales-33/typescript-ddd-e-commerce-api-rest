import { CreationEvent } from "../../../CreationEvent/domain/CreationEvent";
import { CreationEventDate } from "../../../CreationEvent/domain/CreationEventDate";
import { CreationEventId } from "../../../CreationEvent/domain/CreationEventId";
import { CreationEventName } from "../../../CreationEvent/domain/CreationEventName";
import { UserId } from "../../../User/domain/UserId";
import { Category } from "../../domain/Category";
import { CategoryCommandRepository } from "../../domain/CategoryCommandRepository";
import { CategoryDescription } from "../../domain/CategoryDescription";
import { CategoryId } from "../../domain/CategoryId";
import { CategoryLevel } from "../../domain/CategoryLevel";
import { CategoryValue } from "../../domain/CategoryValue";

export class CategoryCreator {
    constructor(private repository: CategoryCommandRepository) { }
    async execute(value: CategoryValue, level: CategoryLevel, description: CategoryDescription, createBy: UserId) {
        const creationEvent = new CreationEvent(
            new CreationEventId(CreationEventId.random().value),
            new CreationEventName('New category element'),
            new CreationEventDate(new Date()),
            createBy
        );

        const categoryId = new CategoryId(CategoryId.random().value);

        const newCategory = new Category(
            categoryId,
            value,
            level,
            description,
            creationEvent
        )
        return await this.repository.save(newCategory);
    }
}