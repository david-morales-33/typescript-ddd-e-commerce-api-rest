import { Query } from "../../../../Shared/domain/cqrs/Query";

export class FindProductQuery implements Query {
    constructor(public readonly productId: string) { }
}