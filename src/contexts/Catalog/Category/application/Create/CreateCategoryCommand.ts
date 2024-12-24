import { Command } from "../../../../Shared/domain/cqrs/Command";

export class CreateCategoryCommand implements Command {
    constructor(
        public readonly value: string,
        public readonly level: string,
        public readonly description: string,
        public readonly createBy: string
    ) { }
}