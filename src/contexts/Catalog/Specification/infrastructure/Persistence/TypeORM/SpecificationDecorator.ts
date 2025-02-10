import { SpecificationDTO } from "../../../domain/SpecificationDTO";

export class SpecificationDecorator extends SpecificationDTO {
    constructor(
        public readonly id: string,
        public readonly name: string,
        public readonly productId: string,
    ) { super(id, name) }
}