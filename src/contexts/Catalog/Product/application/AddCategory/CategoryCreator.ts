import { Category } from "../../../Category/domain/Category";
import { ProductCommandRepository } from "../../domain/ProductCommandRepository";
import { ProductId } from "../../domain/ProductId";
import { ProductNotFoundException } from "../../domain/ProductNotFoundException";
import { ProductQueryRepository } from "../../domain/ProductQueryRepository";

export class CategoryCreator {
    constructor(
        private commandRepository: ProductCommandRepository,
        private queryRepository: ProductQueryRepository
    ) { }

    async execute(productId: ProductId, categoryList: Category[]) {
        const product = await this.queryRepository.find(productId);
        if (product === null) throw new ProductNotFoundException(productId.value);
        product.addCategory(categoryList);
        await this.commandRepository.save(product);
    }
}