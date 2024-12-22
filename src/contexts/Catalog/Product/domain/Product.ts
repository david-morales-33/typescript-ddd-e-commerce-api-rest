import { ProductSpecificationsCounter } from "./ProductSpecificationsCounter";
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
import { CreationEventDTO } from "../../CreationEvent/domain/CreationEventDTO";
import { ProductDTO } from "./ProductDTO";

export class Product extends AggregateRoot {

    private _specificatinsCounter: ProductSpecificationsCounter;
    private _mediaFileCounter: ProductMediaFileCounter;
    private _labelCounter: ProductLabelCounter;
    private _skuCounter: ProductSkuCounter;

    private _modificationEventList: ModificationEvent[] = [];
    private _specificationList: Specification[] = [];
    private _complementList: Complement[] = [];
    private _mediaFileList: MediaFile[] = [];
    private _categoryList: Category[] = [];
    private _labelList: Label[] = [];
    private _skuList: Sku[] = [];

    constructor(
        public readonly id: ProductId,
        public readonly name: ProductName,
        public readonly state: ProductState,
        public readonly description: ProductDescription,
        public readonly creationEvent: CreationEvent
    ) {
        super();
        this._specificatinsCounter = new ProductSpecificationsCounter(this._specificationList.length);
        this._mediaFileCounter = new ProductMediaFileCounter(this._mediaFileList.length);
        this._labelCounter = new ProductLabelCounter(this._labelList.length);
        this._skuCounter = new ProductSkuCounter(this._skuList.length);
    }

    public static create(
        id: ProductId,
        name: ProductName,
        state: ProductState,
        description: ProductDescription,
        creationEvent: CreationEvent
    ): Product {
        return new Product(id, name, state, description, creationEvent);
    }

    public static fromPrimitives(data: {
        id: string,
        name: string,
        state: string,
        description: string,
        creationEvent: CreationEventDTO,
    }): Product {
        return new Product(
            new ProductId(data.id),
            new ProductName(data.name),
            ProductState.fromValue(data.state),
            new ProductDescription(data.description),
            CreationEvent.fromPrimitives(data.creationEvent)
        )
    }

    public get modificationEventList(): ModificationEvent[] {
        return this._modificationEventList;
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

    public get complementList(): Complement[] {
        return this._complementList;
    }

    public get specificationList(): Specification[] {
        return this._specificationList;
    }

    public get mediaFileList(): MediaFile[] {
        return this._mediaFileList;
    }

    public get categoryList(): Category[] {
        return this._categoryList;
    }

    public get labelList(): Label[] {
        return this._labelList;
    }

    public get skuList(): Sku[] {
        return this._skuList;
    }

    public setSku(data: Sku[]): Product {
        this._skuList = data;
        this._skuCounter = new ProductSkuCounter(data.length)
        return this;
    }

    public setLabel(data: Label[]): Product {
        this._labelList = data;
        this._labelCounter = new ProductLabelCounter(data.length);
        return this;
    }

    public setCategory(data: Category[]): Product {
        this._categoryList = data;
        return this;
    }

    public setMediaFile(data: MediaFile[]): Product {
        this._mediaFileList = data;
        return this;
    }

    public setComplements(data: Complement[]): Product {
        this._complementList = data;
        return this;
    }

    public setSpecifications(data: Specification[]): Product {
        this._specificationList = data;
        return this;
    }

    public addSku(data: Sku[]) {
        data.forEach((entry) => {
            this._skuList.push(entry);
            this.incrementSkuCounter();
        })
    }

    public addSpecifications(data: Specification[]) {
        data.forEach((element) => {
            this._specificationList.push(element);
            this.incrementSpecificationCounter();
        })
    }

    public addMediaFile(data: MediaFile[]) {
        data.forEach((entry) => {
            this._mediaFileList.push(entry);
            this.incrementMediaFileCounter();
        })
    }

    public addLabel(data: Label[]) {
        data.forEach((entry) => {
            this._labelList.push(entry);
            this.incrementLabelCounter();
        })
    }

    public addCategory(data: Category[]) {
        data.forEach((entry) => { this._categoryList.push(entry) })
    }

    public addComplements(data: Complement[]) {
        data.forEach((entry) => { this._complementList.push(entry) })
    }

    private incrementSkuCounter(): ProductSkuCounter {
        return ProductSkuCounter.increment(this._skuCounter.value);
    }

    private incrementSpecificationCounter(): ProductSpecificationsCounter {
        return ProductSpecificationsCounter.increment(this._specificatinsCounter.value);
    }

    private incrementMediaFileCounter(): ProductMediaFileCounter {
        return ProductMediaFileCounter.increment(this._mediaFileCounter.value);
    }

    private incrementLabelCounter(): ProductLabelCounter {
        return ProductLabelCounter.increment(this._labelCounter.value);
    }

    public toPrimitives(): ProductDTO {
        return new ProductDTO(
            this.id.value,
            this.name.value,
            this.state.value,
            this.description.value,
            this.creationEvent.toPrimitives(),
            this.specificatinsCounter.value,
            this.mediaFileCounter.value,
            this.labelCounter.value,
            this.skuCounter.value,
            this._modificationEventList.map(entry => entry),
            this._specificationList.map(entry => entry.toPrimitives()),
            this._complementList.map(entry => entry.toPrimitives()),
            this._mediaFileList.map(entry => entry.toPrimitives()),
            this._categoryList.map(entry => entry.toPrimitives()),
            this._labelList.map(entry => entry.toPrimitives()),
            this._skuList.map(entry => entry.toPrimitives())
        )
    }
}