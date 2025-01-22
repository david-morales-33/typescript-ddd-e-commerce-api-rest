import { ProductSpecificationsCounter } from "./ProductSpecificationsCounter";
import { AggregateRoot } from "../../../Shared/domain/aggregate/AggregateRoot";
import { Specification } from "../../Specification/domain/Specification";
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
import { ProductDTO } from "./ProductDTO";
import { UpdateEvent } from "../../UpdateEvent/domain/UpdateEvent";
import { ProductCreationDate } from "./ProductCreationDate";
import { ProductType } from "../../ProductType/domain/ProductType";
import { ProductTypeDTO } from "../../ProductType/domain/ProductTypeDTO";
import { UserId } from "../../../Shared/domain/value-objects/UserId";

export class Product extends AggregateRoot {

    private _specificatinsCounter: ProductSpecificationsCounter;
    private _mediaFileCounter: ProductMediaFileCounter;
    private _labelCounter: ProductLabelCounter;
    private _skuCounter: ProductSkuCounter;

    private _updateEventList: UpdateEvent[] = [];
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
        public readonly type: ProductType,
        public readonly description: ProductDescription,
        public readonly createBy: UserId,
        public readonly createAt: ProductCreationDate
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
        type: ProductType,
        description: ProductDescription,
        createBy: UserId,
        createAt: ProductCreationDate
    ): Product {
        return new Product(id, name, state, type, description, createBy, createAt);
    }

    public static fromPrimitives(data: {
        id: string,
        name: string,
        state: string,
        type: ProductTypeDTO,
        description: string,
        createBy: string,
        createAt: Date
    }): Product {
        return new Product(
            new ProductId(data.id),
            new ProductName(data.name),
            ProductState.fromValue(data.state),
            ProductType.fromPrimitives(data.type),
            new ProductDescription(data.description),
            new UserId(data.createBy),
            new ProductCreationDate(data.createAt)
        )
    }

    public get modificationEventList(): UpdateEvent[] {
        return this._updateEventList;
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
            this._skuCounter = this.incrementSkuCounter();
        })
    }

    public addSpecifications(data: Specification[]) {
        data.forEach((element) => {
            this._specificationList.push(element);
            this._specificatinsCounter = this.incrementSpecificationCounter();
        })
    }

    public addMediaFile(data: MediaFile[]) {
        data.forEach((entry) => {
            this._mediaFileList.push(entry);
            this._mediaFileCounter = this.incrementMediaFileCounter();
        })
    }

    public addLabel(data: Label[]) {
        data.forEach((entry) => {
            this._labelList.push(entry);
            this._labelCounter = this.incrementLabelCounter();
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
            this.type.toPrimitives(),
            this.description.value,
            this.createBy.value,
            this.createAt.value,
            this._updateEventList.map(entry => entry.toPrimitives()),
            this._specificationList.map(entry => entry.toPrimitives()),
            this._complementList.map(entry => entry.toPrimitives()),
            this._mediaFileList.map(entry => entry.toPrimitives()),
            this._categoryList.map(entry => entry.toPrimitives()),
            this._labelList.map(entry => entry.toPrimitives()),
            this._skuList.map(entry => entry.toPrimitives())
        )
    }
}