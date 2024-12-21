import { Command } from "../../../../Shared/domain/cqrs/Command";
import { Category } from "../../../Category/domain/Category";
import { ProductId } from "../../domain/ProductId";

export class AddCategoryCommand implements Command {
    constructor(
        public readonly productId: ProductId,
        public readonly categoryList: Category[]
    ){}
}