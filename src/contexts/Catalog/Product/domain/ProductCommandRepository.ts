import { Product } from "./Product";

export interface ProductCommandRepository {
    save(product: Product): Promise<void>;
}