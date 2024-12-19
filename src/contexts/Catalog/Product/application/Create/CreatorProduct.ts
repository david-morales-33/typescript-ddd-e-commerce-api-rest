import { CreationEvent } from "../../../CreationEvent/domain/CreationEvent";
import { CreationEventDate } from "../../../CreationEvent/domain/CreationEventDate";
import { CreationEventId } from "../../../CreationEvent/domain/CreationEventId";
import { CreationEventName } from "../../../CreationEvent/domain/CreationEventName";
import { UserId } from "../../../User/domain/UserId";
import { Product } from "../../domain/Product";
import { ProductCommandRepository } from "../../domain/ProductCommandRepository";
import { ProductDescription } from "../../domain/ProductDescription";
import { ProductId } from "../../domain/ProductId";
import { ProductName } from "../../domain/ProductName";
import { ProductState } from "../../domain/ProductState";

export class CreatorProduct {
    constructor(private commandRepository: ProductCommandRepository) { }

    async execute(id: ProductId, name: ProductName, description: ProductDescription, createBy: UserId) {

        const state = ProductState.fromValue('Enable');

        const creationDate = new CreationEvent(
            new CreationEventId(CreationEventId.random().value),
            new CreationEventName('New product'),
            new CreationEventDate(new Date()),
            createBy
        );

        const product = new Product(id, name, state, description, creationDate);

        await this.commandRepository.save(product)
    }
}