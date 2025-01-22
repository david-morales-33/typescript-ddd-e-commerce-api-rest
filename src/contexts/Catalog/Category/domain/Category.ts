import { UserId } from "../../../Shared/domain/value-objects/UserId";
import { CategoryCreationDate } from "./CategoryCreationDate";
import { CategoryDescription } from "./CategoryDescription";
import { CategoryDTO } from "./CategoryDTO";
import { CategoryId } from "./CategoryId";
import { CategoryLevel } from "./CategoryLevel";
import { CategoryValue } from "./CategoryValue";

export class Category {
    constructor(
        public readonly id: CategoryId,
        public readonly value: CategoryValue,
        public readonly level: CategoryLevel,
        public readonly description: CategoryDescription,
        public readonly createby: UserId,
        public readonly createAt: CategoryCreationDate
    ) { }

    public static create(
        id: CategoryId,
        value: CategoryValue,
        level: CategoryLevel,
        description: CategoryDescription,
        createby: UserId,
        createAt: CategoryCreationDate
    ): Category {
        return new Category(id, value, level, description, createby, createAt);
    }

    public static fromPrimitives(data: CategoryDTO): Category {
        return new Category(
            new CategoryId(data.id),
            new CategoryValue(data.value),
            CategoryLevel.fromValue(data.level),
            new CategoryDescription(data.description),
            new UserId(data.createBy),
            new CategoryCreationDate(data.createAt)
        )
    }

    public toPrimitives(): CategoryDTO {
        return new CategoryDTO(
            this.id.value,
            this.value.value,
            this.level.value,
            this.description.value,
            this.createby.value,
            this.createAt.value
        );
    }
}