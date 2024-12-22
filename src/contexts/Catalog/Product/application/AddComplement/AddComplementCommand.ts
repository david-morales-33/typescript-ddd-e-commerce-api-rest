import { Command } from "../../../../Shared/domain/cqrs/Command";
import { ComplementDTO } from "../../../Complement/domain/ComplementDTO";

export class AddComplementCommand implements Command {
    constructor(
        public readonly productId: string,
        public readonly complementList: ComplementDTO[]
    ) { }
}