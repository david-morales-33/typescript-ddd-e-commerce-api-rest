import { Query } from "../../../../Shared/domain/cqrs/Query";
import { QueryHandler } from "../../../../Shared/domain/cqrs/QueryHandler";
import { ProductId } from "../../domain/ProductId";
import { FindProductQuery } from "./FindProductQuery";
import { ProductFinder } from "./ProductFinder";
import { ProductResponse } from "./ProductResponse";

export class FindProductQueryHandler implements QueryHandler<FindProductQuery, ProductResponse> {
    constructor(private finder: ProductFinder) { }
    subscribedTo(): Query {
        return FindProductQuery;
    }
    async handle(query: FindProductQuery): Promise<ProductResponse> {
        const productId = new ProductId(query.productId);
        const response = await this.finder.execute(productId);
        return response.toPrimitives();
    }
}
