import { MediaFileDescription } from "./MediaFileDescription";
import { MediaFileId } from "./MediaFileId";
import { MediaFileType } from "./MediaFileType";
import { MediaFileUrl } from "./MediaFileUrl";

export class MediaFile {
    constructor(
        public readonly id: MediaFileId,
        public readonly tipo: MediaFileType,
        public readonly url: MediaFileUrl,
        public readonly description: MediaFileDescription
    ) { }
}