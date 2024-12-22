import { Command } from "../../../../Shared/domain/cqrs/Command";
import { SpecificationDTO } from "../../../Specification/domain/SpecificationDTO";

export class AddSpecificationCommand implements Command {
    constructor(
        public readonly productId: string,
        public readonly specificationList: SpecificationDTO[]
    ) { }
}