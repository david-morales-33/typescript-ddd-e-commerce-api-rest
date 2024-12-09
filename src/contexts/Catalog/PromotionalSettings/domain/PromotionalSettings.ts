import { PromotionalSettingsFinalDate } from "./PromotionalSettingsFinalDate";
import { PromotionalSettingsId } from "./PromotionalSettingsId";
import { PromotionalSettingsInitialDate } from "./PromotionalSettingsInitialDate";
import { PromotionalSettingsPercentage } from "./PromotionalSettingsPercentage";
import { PromotionalSettingsType } from "./PromotionalSettingsType";

export class PromotionalSettings {
    constructor(
        public readonly id: PromotionalSettingsId,
        public readonly type: PromotionalSettingsType,
        public readonly percentage: PromotionalSettingsPercentage,
        public readonly initialDate: PromotionalSettingsInitialDate,
        public readonly finalDate: PromotionalSettingsFinalDate
    ) { }

}