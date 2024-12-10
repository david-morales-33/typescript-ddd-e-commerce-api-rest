import { ComplementId } from "./ComplementId";
import { ComplementMainProductId } from "./ComplementMainProductId";
import { ComplementProductId } from "./ComplementProductId";

export class Complement {
    constructor(
        public readonly id: ComplementId,
        public readonly mainProductId: ComplementMainProductId,
        public readonly complementProductoId: ComplementProductId
    ) { }
}