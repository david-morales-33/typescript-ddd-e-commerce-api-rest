import { Response } from "../../../../Shared/domain/cqrs/Response";
import { Label } from "../../domain/Label";
import { LabelDTO } from "../../domain/LabelDTO";

export class LabelResponse implements Response {
    public readonly response: LabelDTO[];
    constructor(data: Label[]) {
        this.response = data.map(entry => entry.toPrimitives());
    }
}