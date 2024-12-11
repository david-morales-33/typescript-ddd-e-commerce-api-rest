import { SpecificationId } from "./SpecificationId";
import { SpecificationName } from "./SpecificationName";
import { SpecificationValue } from "./SpecificationValue";

export class Specification {
    constructor(
        public readonly id: SpecificationId,
        public readonly name: SpecificationName,
        public readonly valueList: SpecificationValue[]
    ) { }
}