import { Product } from "./Product";
import { ProductId } from "./ProductId";

export interface ProductQueryRepository {
    find(productId: ProductId): Promise<Product | null>;
    searchAll(): Promise<Product[]>;
    searchByCriteria(criteria: any): Promise<Product[]>;
}