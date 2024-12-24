import { Category } from "./Category";

export interface CategoryCommandRepository {
    save(category: Category): Promise<void>
}