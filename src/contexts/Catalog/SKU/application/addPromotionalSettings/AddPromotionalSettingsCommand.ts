import { Command } from "../../../../Shared/domain/cqrs/Command";

export class AddPromotionalSettingsCommand implements Command {
    constructor(
        public readonly skuId: string,
        public readonly type: string,
        public readonly percentage: number,
        public readonly initialDate: Date,
        public readonly finalDate: Date,
        public readonly createBy: string
    ) { }
}