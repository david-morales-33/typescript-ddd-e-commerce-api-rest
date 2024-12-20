import { ProductQueryRepository } from "../../domain/ProductQueryRepository";

export class ProductSearcher {
    constructor(private repository: ProductQueryRepository) { }
    async execute() {
        return await this.repository.searchAll();
    }
}