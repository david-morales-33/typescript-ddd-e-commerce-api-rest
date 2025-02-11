import { Command } from "../../../../Shared/domain/cqrs/Command";

export class CreateLabelCommand implements Command{
    constructor(
        public readonly id: string,
        public readonly value: string
    ){}
}