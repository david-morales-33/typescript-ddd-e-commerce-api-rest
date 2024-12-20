import { Query } from "../../../../Shared/domain/cqrs/Query";
import { QueryHandler } from "../../../../Shared/domain/cqrs/QueryHandler";
import { ProductQueryRepository } from "../../domain/ProductQueryRepository";
import { ProductResponse } from "./ProductResponse";
import { SearchAllProductQuery } from "./SearchAllProductQuery";

export class SearchAllProductQueryHandler implements QueryHandler<SearchAllProductQuery, ProductResponse> {
    constructor(private repository: ProductQueryRepository) { }
    subscribedTo(): Query {
        return SearchAllProductQuery;
    }
    async handle(_query: SearchAllProductQuery): Promise<ProductResponse> {
        const productList = await this.repository.searchAll();
        return new ProductResponse(productList);
    }
}