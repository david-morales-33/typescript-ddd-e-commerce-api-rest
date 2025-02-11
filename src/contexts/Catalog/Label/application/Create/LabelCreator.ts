import { Label } from "../../domain/Label";
import { LabelCommandRepository } from "../../domain/LabelCommandRepository";
import { LabelId } from "../../domain/LabelId";
import { LabelQueryRepository } from "../../domain/LabelQueryRepository";
import { LabelValue } from "../../domain/LabelValue";

export class LabelCreator {
    constructor(private commandRepository: LabelCommandRepository) { }

    async execute(id: LabelId, value: LabelValue) {
        const label = Label.create(id, value);
        await this.commandRepository.save(label);
    }
}