import { Response } from "../../../../Shared/domain/cqrs/Response";
import { Product } from "../../domain/Product";
import { ProductDTO } from "../../domain/ProductDTO";

export class ProductResponse implements Response {
    public readonly response: ProductDTO[];
    constructor(data: Product[]) {
        this.response = data.map(entry => entry.toPrimitives());
    }
}