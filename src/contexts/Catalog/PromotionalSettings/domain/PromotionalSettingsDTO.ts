
export class PromotionalSettingsDTO {
    constructor(
        public readonly id: string,
        public readonly type: string,
        public readonly percentage: number,
        public readonly initialDate: Date,
        public readonly finalDate: Date,
        public readonly skuId: string,
    ) { }
}