import { UserId } from "../../../Shared/domain/value-objects/UserId";
import { PromotionalSettingsCreationDate } from "./PromotionalSettingsCreationDate";
import { PromotionalSettingsDTO } from "./PromotionalSettingsDTO";
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
        public readonly finalDate: PromotionalSettingsFinalDate,
        public readonly createBy: UserId,
        public readonly createAt: PromotionalSettingsCreationDate
    ) { }

    public static fromPrimitives(data: PromotionalSettingsDTO): PromotionalSettings {
        return new PromotionalSettings(
            new PromotionalSettingsId(data.id),
            new PromotionalSettingsType(data.type),
            new PromotionalSettingsPercentage(data.percentage),
            new PromotionalSettingsInitialDate(data.initialDate),
            new PromotionalSettingsFinalDate(data.finalDate),
            new UserId(data.createBy),
            new PromotionalSettingsCreationDate(data.createAt)
        )
    }

    public toPrimitives(): PromotionalSettingsDTO {
        return new PromotionalSettingsDTO(
            this.id.value,
            this.type.value,
            this.percentage.value,
            this.initialDate.value,
            this.finalDate.value,
            this.createBy.value,
            this.createAt.value
        )
    }
}