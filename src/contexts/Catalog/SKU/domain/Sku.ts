import { map } from "mssql";
import { AggregateRoot } from "../../../Shared/domain/aggregate/AggregateRoot";
import { Price } from "../../Price/domain/Price";
import { PromotionalSettings } from "../../PromotionalSettings/domain/PromotionalSettings";
import { SkuAttribute } from "../../SKUAttribute/domain/SkuAttribute";
import { Stock } from "../../Stock/domain/Stock";
import { SkuDTO } from "./SkuDTO";
import { SkuId } from "./SkuId";
import { SkuState } from "./SkuState";
import { SkuValue } from "./SkuValue";
import { SkuAttributesCounter } from "./SkuAttributesCounter";

export class Sku extends AggregateRoot {

    private _attributesCounter: SkuAttributesCounter;

    constructor(
        public readonly id: SkuId,
        public readonly value: SkuValue,
        public readonly state: SkuState,
        public readonly priceBase: Price,
        public readonly stockList: Stock[],
        public readonly attributesList: SkuAttribute[],
        public readonly promotionalSettings: PromotionalSettings[]
    ) {
        super();
        this._attributesCounter = new SkuAttributesCounter(attributesList.length);
    }

    public static fromPrimitives(data: SkuDTO): Sku {
        return new Sku(
            new SkuId(data.id),
            new SkuValue(data.value),
            SkuState.fromValue(data.state),
            Price.fromPrimitives(data.priceBase),
            data.stockList.map(entry => Stock.fromPrimitives(entry)),
            data.attributesList.map(entry => SkuAttribute.fromPrimitives(entry)),
            data.promotionalSettings.map(entry => PromotionalSettings.fromPrimitives(entry))
        )
    }

    public get attributesCounter(): SkuAttributesCounter {
        return this._attributesCounter;
    }

    public addPromotionalSettings(promottionalSettings: PromotionalSettings) {
        this.promotionalSettings.push(promottionalSettings);
    }

    public addAvailableStock(availableStock: Stock) {
        this.stockList.push(availableStock);
    }

    public addAttributeList(attributeList: SkuAttribute[]) {
        attributeList.forEach(element => {
            this.attributesList.push(element);
        })
        this._attributesCounter = this.incrementAttributesList(attributeList.length);
    }

    public addStokList(stockList: Stock[]) {
        stockList.forEach(element => {
            this.stockList.push(element);
        })
    }

    private incrementAttributesList(value: number): SkuAttributesCounter {
        return this._attributesCounter.increment(value);
    }

    public toPrimitives(): SkuDTO {
        return new SkuDTO(
            this.id.value,
            this.value.value,
            this.state.value,
            this.priceBase.toPrimitives(),
            this.stockList.map(entry => entry.toPrimitives()),
            this.attributesList.map(entry => entry.toPrimitives()),
            this.promotionalSettings.map(entry => entry.toPrimitives())
        )
    }
}