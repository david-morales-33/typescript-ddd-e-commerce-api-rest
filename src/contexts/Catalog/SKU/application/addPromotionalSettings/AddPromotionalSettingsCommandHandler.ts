import { Command } from "../../../../Shared/domain/cqrs/Command";
import { CommandHandler } from "../../../../Shared/domain/cqrs/CommandHandler";
import { PromotionalSettings } from "../../../PromotionalSettings/domain/PromotionalSettings";
import { PromotionalSettingsCreationDate } from "../../../PromotionalSettings/domain/PromotionalSettingsCreationDate";
import { PromotionalSettingsFinalDate } from "../../../PromotionalSettings/domain/PromotionalSettingsFinalDate";
import { PromotionalSettingsId } from "../../../PromotionalSettings/domain/PromotionalSettingsId";
import { PromotionalSettingsInitialDate } from "../../../PromotionalSettings/domain/PromotionalSettingsInitialDate";
import { PromotionalSettingsPercentage } from "../../../PromotionalSettings/domain/PromotionalSettingsPercentage";
import { PromotionalSettingsType } from "../../../PromotionalSettings/domain/PromotionalSettingsType";
import { UserId } from "../../../User/domain/UserId";
import { SkuId } from "../../domain/SkuId";
import { AddPromotionalSettingsCommand } from "./AddPromotionalSettingsCommand";
import { PromotionalSettingsCreator } from "./PromotionalSettingsCreator";

export class AddPromotionalSettingsCommandHandler implements CommandHandler<AddPromotionalSettingsCommand> {
    constructor(private creator: PromotionalSettingsCreator) { }
    subscribedTo(): Command {
        return AddPromotionalSettingsCommand;
    }
    async handle(command: AddPromotionalSettingsCommand): Promise<void> {

        const skuId = new SkuId(command.skuId);
        const id = PromotionalSettingsId.random();
        const type = new PromotionalSettingsType(command.type);
        const percentage = new PromotionalSettingsPercentage(command.percentage);
        const initialDate = new PromotionalSettingsInitialDate(command.initialDate);
        const finalDate = new PromotionalSettingsFinalDate(command.finalDate);
        const createBy = new UserId(command.createBy);
        const createAt = new PromotionalSettingsCreationDate(new Date());

        const promotionalSettings = new PromotionalSettings(id, type, percentage, initialDate, finalDate, createBy, createAt);
        await this.creator.execute(skuId, promotionalSettings);
    }
}