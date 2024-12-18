import { ComplementDTO } from "./ComplementDTO";
import { ComplementId } from "./ComplementId";
import { ComplementMainProductId } from "./ComplementMainProductId";
import { ComplementProductId } from "./ComplementProductId";

export class Complement {
    constructor(
        public readonly id: ComplementId,
        public readonly mainProductId: ComplementMainProductId,
        public readonly complementProductoId: ComplementProductId
    ) { }

    public static fromPrimitives(data: ComplementDTO): Complement {
        return new Complement(
            new ComplementId(data.id),
            new ComplementMainProductId(data.mainProductId),
            new ComplementProductId(data.complementProductoId)
        )
    }

    public toPrimitives(): ComplementDTO {
        return new ComplementDTO(
            this.id.value,
            this.mainProductId.value,
            this.complementProductoId.value
        )
    }
}