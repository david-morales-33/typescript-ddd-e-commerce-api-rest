import { Command } from "../../../../Shared/domain/cqrs/Command";

export class CreateProductCommand implements Command {
    constructor(
        public readonly id: string,
        public readonly name: string,
        public readonly description: string,
        public readonly createBy: string
    ) { }
}