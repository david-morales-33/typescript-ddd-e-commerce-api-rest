import { PromotionalSettingsDTO } from "../../../domain/PromotionalSettingsDTO";

export class PromotionalSettingsDecorator extends PromotionalSettingsDTO {
    constructor(
        public readonly id: string,
        public readonly type: string,
        public readonly percentage: number,
        public readonly initialDate: Date,
        public readonly finalDate: Date,
        public readonly createBy: string,
        public readonly createAt: Date,
        public readonly skuId: string,
    ) { super(id, type, percentage, initialDate, finalDate, createBy, createAt) }
}