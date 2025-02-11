import { Query } from "../../../../Shared/domain/cqrs/Query";
import { QueryHandler } from "../../../../Shared/domain/cqrs/QueryHandler";
import { LabelQueryRepository } from "../../domain/LabelQueryRepository";
import { LabelResponse } from "./LabelResponse";
import { SearchAllLabelQuery } from "./SearchAllLabelQuery";

export class SearchAllLabelQueryHandler implements QueryHandler<SearchAllLabelQuery, LabelResponse> {
    constructor(private repository: LabelQueryRepository) { }

    subscribedTo(): Query {
        return SearchAllLabelQuery;
    }

    async handle(query: SearchAllLabelQuery): Promise<LabelResponse> {
        return new LabelResponse(await this.repository.searchAll())
    }
}