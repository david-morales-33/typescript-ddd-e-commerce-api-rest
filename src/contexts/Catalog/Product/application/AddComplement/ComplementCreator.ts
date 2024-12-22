import { Complement } from "../../../Complement/domain/Complement";
import { ProductCommandRepository } from "../../domain/ProductCommandRepository";
import { ProductId } from "../../domain/ProductId";
import { ProductNotFoundException } from "../../domain/ProductNotFoundException";
import { ProductQueryRepository } from "../../domain/ProductQueryRepository";

export class ComplementCreator {
    constructor(
        private commandRepository: ProductCommandRepository,
        private queryRepository: ProductQueryRepository
    ) { }

    async execute(productId: ProductId, complementList: Complement[]) {
        const product = await this.queryRepository.find(productId);

        if (product === null) throw new ProductNotFoundException(productId.value);
        product.addComplements(complementList);
        await this.commandRepository.save(product);
    }
}