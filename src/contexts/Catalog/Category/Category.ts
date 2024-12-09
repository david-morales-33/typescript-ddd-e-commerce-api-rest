import { CategoryDescription } from "./CategoryDescription";
import { CategoryId } from "./CategoryId";
import { CategoryLevel } from "./CategoryLevel";
import { CategoryValue } from "./CategoryValue";

export class Category {
    constructor(
        private readonly id: CategoryId,
        private readonly value: CategoryValue,
        private readonly level: CategoryLevel,
        private readonly description: CategoryDescription 
    ){}
}