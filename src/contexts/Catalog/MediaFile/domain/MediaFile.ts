import { MediaFileDescription } from "./MediaFileDescription";
import { MediaFileDTO } from "./MediaFileDTO";
import { MediaFileId } from "./MediaFileId";
import { MediaFileType } from "./MediaFileType";
import { MediaFileUrl } from "./MediaFileUrl";

export class MediaFile {
    constructor(
        public readonly id: MediaFileId,
        public readonly type: MediaFileType,
        public readonly url: MediaFileUrl,
        public readonly description: MediaFileDescription
    ) { }

    public static fromPrimitives(data: MediaFileDTO): MediaFile {
        return new MediaFile(
            new MediaFileId(data.id),
            MediaFileType.fromValue(data.type),
            new MediaFileUrl(data.url),
            new MediaFileDescription(data.description)
        )
    }

    public toPrimitives(): MediaFileDTO {
        return new MediaFileDTO(
            this.id.value,
            this.type.value,
            this.url.value,
            this.description.value
        );
    }
}