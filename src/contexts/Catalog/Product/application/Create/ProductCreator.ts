import { UserId } from "../../../../Shared/domain/value-objects/UserId";
import { ProductType } from "../../../ProductType/domain/ProductType";
import { ProductTypeId } from "../../../ProductType/domain/ProductTypeId";
import { ProductTypeValue } from "../../../ProductType/domain/ProductTypeValue";
import { Product } from "../../domain/Product";
import { ProductCommandRepository } from "../../domain/ProductCommandRepository";
import { ProductCreationDate } from "../../domain/ProductCreationDate";
import { ProductDescription } from "../../domain/ProductDescription";
import { ProductId } from "../../domain/ProductId";
import { ProductName } from "../../domain/ProductName";
import { ProductState } from "../../domain/ProductState";

export class ProductCreator {
    constructor(private commandRepository: ProductCommandRepository) { }

    async execute(
        id: ProductId,
        name: ProductName,
        typeId: ProductTypeId,
        typeValue: ProductTypeValue,
        description: ProductDescription,
        createBy: UserId
    ) {

        const state = ProductState.fromValue('Available');
        const createAt = new ProductCreationDate(new Date());
        const type = new ProductType(typeId, typeValue);
        const product = new Product(id, name, state, type, description, createBy, createAt);
        await this.commandRepository.save(product)
    }
}