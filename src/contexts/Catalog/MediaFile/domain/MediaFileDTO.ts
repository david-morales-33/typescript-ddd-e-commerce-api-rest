
export class MediaFileDTO {
    constructor(
        public readonly id: string,
        public readonly type: string,
        public readonly url: string,
        public readonly description: string
    ) { }
}