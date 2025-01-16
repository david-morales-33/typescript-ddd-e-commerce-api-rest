import { Query } from "../../../../Shared/domain/cqrs/Query";

export class FindSkuQuery implements Query {
    constructor(public readonly id: string) { }
}