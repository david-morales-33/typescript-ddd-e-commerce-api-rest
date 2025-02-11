import { LabelQueryRepository } from "../../domain/LabelQueryRepository";

export class LabelSearcher {
    constructor(private repository: LabelQueryRepository) { }
    async execute() {
        return await this.repository.searchAll();
    }
}