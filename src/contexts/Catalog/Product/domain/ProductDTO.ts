import { CategoryDTO } from "../../Category/domain/CategoryDTO";
import { ComplementDTO } from "../../Complement/domain/ComplementDTO";
import { CreationEventDTO } from "../../CreationEvent/domain/CreationEventDTO";
import { LabelDTO } from "../../Label/domain/LabelDTO";
import { MediaFileDTO } from "../../MediaFile/domain/MediaFileDTO";
import { SkuDTO } from "../../SKU/domain/SkuDTO";
import { SpecificationDTO } from "../../Specification/domain/SpecificationDTO";

export class ProductDTO {
    constructor(
        public readonly id: string,
        public readonly name: string,
        public readonly state: string,
        public readonly description: string,
        public readonly creationEvent: CreationEventDTO,
        public readonly specificatinsCounter: number,
        public readonly mediaFileCounter: number,
        public readonly labelCounter: number,
        public readonly skuCounter: number,
        public readonly modificationEvent: any[],
        public readonly specification: SpecificationDTO[],
        public readonly complements: ComplementDTO[],
        public readonly mediaFile: MediaFileDTO[],
        public readonly category: CategoryDTO[],
        public readonly label: LabelDTO[],
        public readonly sku: SkuDTO[]
    ) { }
}