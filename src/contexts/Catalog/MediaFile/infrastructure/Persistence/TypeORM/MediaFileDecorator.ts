import { MediaFileDTO } from "../../../domain/MediaFileDTO";

export class MediaFileDecorator extends MediaFileDTO {
    constructor(
        public readonly id: string,
        public readonly type: string,
        public readonly url: string,
        public readonly description: string,
        public readonly productId: string
    ) { super(id, type, url, description) }
}