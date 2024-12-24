import { CreationEvent } from "../../CreationEvent/domain/CreationEvent";
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
        public readonly creationEvent: CreationEvent
    ) { }

    public static fromPrimitives(data: CategoryDTO): Category {
        return new Category(
            new CategoryId(data.id),
            new CategoryValue(data.value),
            CategoryLevel.fromValue(data.level),
            new CategoryDescription(data.description),
            CreationEvent.fromPrimitives(data.creationEvent)
        )
    }

    public toPrimitives(): CategoryDTO {
        return new CategoryDTO(
            this.id.value,
            this.value.value,
            this.level.value,
            this.description.value,
            this.creationEvent.toPrimitives()
        );
    }
}