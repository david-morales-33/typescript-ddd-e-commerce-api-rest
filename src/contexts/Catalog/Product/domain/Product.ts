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
import { ProductSkuCounter } from "./ProductSkuCounter";

export class Product extends AggregateRoot {

    private _specificatinsCounter: ProductSpecificationsCounter;
    private _modificationEvent: ModificationEvent | null = null;
    private _mediaFileCounter: ProductMediaFileCounter;
    private _labelCounter: ProductLabelCounter;
    private _skuCounter: ProductSkuCounter;

    private _specification: Specification[] = [];
    private _complements: Complement[] = [];
    private _mediaFile: MediaFile[] = [];
    private _category: Category[] = [];
    private _label: Label[] = [];
    private _sku: Sku[] = [];

    constructor(
        public readonly id: ProductId,
        public readonly name: ProductName,
        public readonly state: ProductState,
        public readonly description: ProductDescription,
        public readonly creationEvent: CreationEvent

    ) {
        super();
        this._specificatinsCounter = new ProductSpecificationsCounter(this._specification.length);
        this._mediaFileCounter = new ProductMediaFileCounter(this._mediaFile.length);
        this._labelCounter = new ProductLabelCounter(this._label.length);
        this._skuCounter = new ProductSkuCounter(this._sku.length);
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

    public get skuCounter(): ProductSkuCounter {
        return this._skuCounter;
    }

    public get complements(): Complement[] {
        return this._complements;
    }

    public get specification(): Specification[] {
        return this._specification;
    }

    public get mediaFile(): MediaFile[] {
        return this._mediaFile;
    }

    public get category(): Category[] {
        return this._category;
    }

    public get label(): Label[] {
        return this._label;
    }

    public get sku(): Sku[] {
        return this._sku;
    }

    public setSku(data: Sku[]): Product {
        this._sku = data;
        this._skuCounter = new ProductSkuCounter(data.length)
        return this;
    }

    public setLabel(data: Label[]): Product {
        this._label = data;
        this._labelCounter = new ProductLabelCounter(data.length);
        return this;
    }

    public setCategory(data: Category[]): Product {
        this._category = data;
        return this;
    }

    public setMediaFile(data: MediaFile[]): Product {
        this._mediaFile = data;
        return this;
    }

    public setComplements(data: Complement[]): Product {
        this._complements = data;
        return this;
    }

    public setSpecifications(data: Specification[]): Product {
        this._specification = data;
        return this;
    }

    toPrimitives() {

    }
}