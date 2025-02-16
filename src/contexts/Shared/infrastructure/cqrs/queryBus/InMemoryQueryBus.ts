import { Query } from "../../../domain/cqrs/Query";
import { QueryBus } from "../../../domain/cqrs/QueryBus";
import { Response } from "../../../domain/cqrs/Response";
import { QueryHandlers } from "./QueryHandlers";

export class InMemoryQueryBus implements QueryBus {
    constructor(private queryHandlersInformation: QueryHandlers) { }

    async ask<R extends Response>(query: Query): Promise<R> {
        const handler = this.queryHandlersInformation.get(query);
        return (await handler.handle(query) as unknown) as Promise<R>;
    }
}
