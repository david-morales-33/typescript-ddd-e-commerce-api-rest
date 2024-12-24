import { Response } from "../../../../Shared/domain/cqrs/Response";
import { Category } from "../../domain/Category";
import { CategoryDTO } from "../../domain/CategoryDTO";

export class CategoryReponse implements Response {
    public readonly response: CategoryDTO[];
    constructor(data: Category[]) {
        this.response = data.map(entry => entry.toPrimitives());
    }
}