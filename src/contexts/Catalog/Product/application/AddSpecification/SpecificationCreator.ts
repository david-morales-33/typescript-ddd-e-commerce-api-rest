import { Specification } from "../../../Specification/domain/Specification";
import { ProductCommandRepository } from "../../domain/ProductCommandRepository";
import { ProductId } from "../../domain/ProductId";
import { ProductNotFoundException } from "../../domain/ProductNotFoundException";
import { ProductQueryRepository } from "../../domain/ProductQueryRepository";

export class SpecificationCreator {
    constructor(
        private commandRepository: ProductCommandRepository,
        private queryReposittory: ProductQueryRepository
    ) { }

    async execute(productId: ProductId, specificationsList: Specification[]) {
        const product = await this.queryReposittory.find(productId);
        if (product === null) throw new ProductNotFoundException(productId.value);
        product.addSpecifications(specificationsList);
        await this.commandRepository.save(product);
    }
}