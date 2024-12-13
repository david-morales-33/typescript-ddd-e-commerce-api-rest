
export class CategoryDTO {
    constructor(
        public readonly id: string,
        public readonly value: string,
        public readonly level: string,
        public readonly description: string
    ) { }
}