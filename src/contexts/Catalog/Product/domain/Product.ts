import { AggregateRoot } from "../../../Shared/domain/aggregate/AggregateRoot";
import { Category } from "../../Category/domain/Category";
import { Complement } from "../../Complement/domain/Complement";
import { Label } from "../../Label/domain/Label";
import { MediaFile } from "../../MediaFile/domain/MediaFile";
import { Sku } from "../../SKU/domain/Sku";
import { Specification } from "../../Specification/domain/Specification";
import { ProductCreationDate } from "./ProductCreationDate";
import { ProductDescription } from "./ProductDescription";
import { ProductId } from "./ProductId";
import { ProductName } from "./ProductName";
import { ProductState } from "./ProductState";

export class Product extends AggregateRoot {
    constructor(
        public readonly id: ProductId,
        public readonly name: ProductName,
        public readonly state: ProductState,
        public readonly description: ProductDescription,
        public readonly creationDate: ProductCreationDate,
        public readonly sku: Sku,
        public readonly specification: Specification[],
        public readonly category: Category[],
        public readonly label: Label[],
        public readonly mediaFile: MediaFile[],
        public readonly complements: Complement[]

    ) { super() }

    toPrimitives() {

    }
}