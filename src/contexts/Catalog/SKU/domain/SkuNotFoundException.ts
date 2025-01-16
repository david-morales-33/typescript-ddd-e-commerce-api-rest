
export class SkuNotFoundException extends Error {
    constructor(skuId: string) {
        super(`SKU <${skuId}> not found`)
    }
}