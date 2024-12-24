import { CategoryQueryRepository } from "../../domain/CategoryQueryRepository";

export class CategorySearcher {
    constructor(private searcher: CategoryQueryRepository){}

    async execute(){
        return await this.searcher.searchAll();
    }
}