import { ProductId } from "../../domain/ProductId";
import { ProductNotFoundException } from "../../domain/ProductNotFoundException";
import { ProductQueryRepository } from "../../domain/ProductQueryRepository";

export class ProductFinder {
    constructor(private repository: ProductQueryRepository) { }
    async execute(productId: ProductId) {
        const product = await this.repository.find(productId);
        if (product === null) throw new ProductNotFoundException(productId.value);
        return product;
    }
}