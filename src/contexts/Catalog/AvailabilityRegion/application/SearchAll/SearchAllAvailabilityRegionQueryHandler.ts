import { Query } from "../../../../Shared/domain/cqrs/Query";
import { QueryHandler } from "../../../../Shared/domain/cqrs/QueryHandler";
import { AvailabilityRegionResponse } from "./AvailabilityRegionResponse";
import { AvailabilityRegionSearcher } from "./AvailabilityRegionSearcher";
import { SearchAllAvailabilityRegionQuery } from "./SearchAllAvailabilityRegionQuery";

export class SearchAllAvailabilityRegionQueryHandler implements
    QueryHandler<SearchAllAvailabilityRegionQuery, AvailabilityRegionResponse> {
    constructor(private searcher: AvailabilityRegionSearcher) { }

    subscribedTo(): Query {
        return AvailabilityRegionResponse;
    }
    async handle(_query: SearchAllAvailabilityRegionQuery): Promise<AvailabilityRegionResponse> {
        return new AvailabilityRegionResponse(await this.searcher.execute());
    }
}