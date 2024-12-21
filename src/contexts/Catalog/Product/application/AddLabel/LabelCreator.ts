import { Label } from "../../../Label/domain/Label";
import { ProductCommandRepository } from "../../domain/ProductCommandRepository";
import { ProductId } from "../../domain/ProductId";
import { ProductNotFoundException } from "../../domain/ProductNotFoundException";
import { ProductQueryRepository } from "../../domain/ProductQueryRepository";


export class LabelCreator {
    constructor(
        private commandRepository: ProductCommandRepository,
        private queryRepository: ProductQueryRepository
    ) { }

    async execute(productId: ProductId, labelList: Label[]) {
        const product = await this.queryRepository.find(productId);
        if (product === null) throw new ProductNotFoundException(productId.value);

        product.addLabel(labelList);
        await this.commandRepository.save(product);
    }
}