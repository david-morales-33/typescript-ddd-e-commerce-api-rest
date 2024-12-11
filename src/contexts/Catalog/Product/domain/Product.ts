import { ProductSpecificationsCounter } from "./ProductSpecificationsCounter";
import { ModificationEvent } from "../../ModificationEvent/domain/ModificationEvent";
import { AggregateRoot } from "../../../Shared/domain/aggregate/AggregateRoot";
import { Specification } from "../../Specification/domain/Specification";
import { CreationEvent } from "../../CreationEvent/domain/CreationEvent";
import { Category } from "../../Category/domain/Category";
import { Complement } from "../../Complement/domain/Complement";
import { Label } from "../../Label/domain/Label";
import { MediaFile } from "../../MediaFile/domain/MediaFile";
import { Sku } from "../../SKU/domain/Sku";
import { ProductDescription } from "./ProductDescription";
import { ProductId } from "./ProductId";
import { ProductLabelCounter } from "./ProductLabelCounter";
import { ProductMediaFileCounter } from "./ProductMediaFileCounter";
import { ProductName } from "./ProductName";
import { ProductState } from "./ProductState";

export class Product extends AggregateRoot {

    private readonly _modificationEvent: ModificationEvent | null = null;
    private readonly _mediaFileCounter: ProductMediaFileCounter;
    private readonly _labelCounter: ProductLabelCounter;
    private readonly _specificatinsCounter: ProductSpecificationsCounter;

    constructor(
        public readonly id: ProductId,
        public readonly name: ProductName,
        public readonly state: ProductState,
        public readonly description: ProductDescription,
        public readonly creationEvent: CreationEvent,
        public readonly sku: Sku,
        public readonly specification: Specification[],
        public readonly category: Category[],
        public readonly label: Label[],
        public readonly mediaFile: MediaFile[],
        public readonly complements: Complement[]

    ) {
        super();
        this._specificatinsCounter = new ProductSpecificationsCounter(specification.length);
        this._mediaFileCounter = new ProductMediaFileCounter(mediaFile.length);
        this._labelCounter = new ProductLabelCounter(label.length);
    }

    public get modificationEvent(): ModificationEvent | null {
        return this._modificationEvent;
    }

    public get mediaFileCounter(): ProductMediaFileCounter {
        return this._mediaFileCounter;
    }

    public get labelCounter(): ProductLabelCounter {
        return this._labelCounter;
    }

    public get specificatinsCounter(): ProductSpecificationsCounter {
        return this._specificatinsCounter;
    }

    toPrimitives() {

    }
}