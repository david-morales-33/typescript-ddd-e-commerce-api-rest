import { Query } from "../../../../Shared/domain/cqrs/Query";
import { QueryHandler } from "../../../../Shared/domain/cqrs/QueryHandler";
import { SkuId } from "../../domain/SkuId";
import { FindSkuQuery } from "./FindSkuQuery";
import { SkuFinder } from "./SkuFinder";
import { SkuResponse } from "./SkuResponse";

export class FindSkuQueryHandler implements QueryHandler<FindSkuQuery, SkuResponse> {
    constructor(private finder: SkuFinder) { }
    subscribedTo(): Query {
        return FindSkuQuery;
    }
    async handle(query: FindSkuQuery): Promise<SkuResponse> {
        const skuId = new SkuId(query.id);
        return (await this.finder.execute(skuId)).toPrimitives();
    }
}