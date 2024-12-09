import { CategoryDescription } from "./CategoryDescription";
import { CategoryId } from "./CategoryId";
import { CategoryLevel } from "./CategoryLevel";
import { CategoryValue } from "./CategoryValue";

export class Category {
    constructor(
        public readonly id: CategoryId,
        public readonly value: CategoryValue,
        public readonly level: CategoryLevel,
        public readonly description: CategoryDescription 
    ){}
}