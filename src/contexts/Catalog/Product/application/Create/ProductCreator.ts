import { UserId } from "../../../User/domain/UserId";
import { Product } from "../../domain/Product";
import { ProductCommandRepository } from "../../domain/ProductCommandRepository";
import { ProductCreationDate } from "../../domain/ProductCreationDate";
import { ProductDescription } from "../../domain/ProductDescription";
import { ProductId } from "../../domain/ProductId";
import { ProductName } from "../../domain/ProductName";
import { ProductState } from "../../domain/ProductState";

export class ProductCreator {
    constructor(private commandRepository: ProductCommandRepository) { }

    async execute(id: ProductId, name: ProductName, description: ProductDescription, createBy: UserId) {

        const state = ProductState.fromValue('Available');
        const createAt = new ProductCreationDate(new Date());
        const product = new Product(id, name, state, description, createBy, createAt);
        await this.commandRepository.save(product)
    }
}