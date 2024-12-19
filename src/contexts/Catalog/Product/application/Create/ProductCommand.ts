import { Command } from "../../../../Shared/domain/cqrs/Command";

export class ProductCommand implements Command {
    constructor(
        public readonly id: string,
        public readonly name: string,
        public readonly description: string,
    ) { }
}