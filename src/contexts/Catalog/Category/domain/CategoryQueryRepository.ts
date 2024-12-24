import { Category } from "./Category";

export interface CategoryQueryRepository {
    searchAll(): Promise<Category[]>;
}