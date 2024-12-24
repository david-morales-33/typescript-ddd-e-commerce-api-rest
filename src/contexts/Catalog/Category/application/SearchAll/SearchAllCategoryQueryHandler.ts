import { Query } from "../../../../Shared/domain/cqrs/Query";
import { QueryHandler } from "../../../../Shared/domain/cqrs/QueryHandler";
import { CategoryCreator } from "../Create/CategoryCreator";
import { CategoryReponse } from "./CategoryReponse";
import { CategorySearcher } from "./CategorySearcher";
import { SearchAllCategoryQuery } from "./SearchAllCategoryQuery";

export class SearchAllCategoryQueryHandler
    implements QueryHandler<SearchAllCategoryQuery, CategoryReponse> {
    constructor(private searcher: CategorySearcher) { }

    subscribedTo(): Query {
        return SearchAllCategoryQuery;
    }
    async handle(_query: SearchAllCategoryQuery): Promise<CategoryReponse> {
        return new CategoryReponse(await this.searcher.execute())
    }
}