import { Command } from "../../../../Shared/domain/cqrs/Command";

export class CreateAvailabilityRegionCommand implements Command {
    constructor(
        public readonly id: string,
        public readonly region: string,
        public readonly createdBy: string
    ) { }
}