import { SpecificationDTO } from "./SpecificationDTO";
import { SpecificationId } from "./SpecificationId";
import { SpecificationName } from "./SpecificationName";
import { SpecificationValue } from "./SpecificationValue";

export class Specification {
    constructor(
        public readonly id: SpecificationId,
        public readonly name: SpecificationName,
    ) { }

    public static fromPrimitives(data: SpecificationDTO): Specification {
        return new Specification(
            new SpecificationId(data.id),
            new SpecificationName(data.name),
        )
    }

    public toPrimitives(): SpecificationDTO {
        return new SpecificationDTO(
            this.id.value,
            this.name.value,
        );
    }
}