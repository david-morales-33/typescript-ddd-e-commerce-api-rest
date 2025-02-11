import { Label } from "./Label";

export interface LabelCommandRepository {
    save(label: Label): Promise<void>
}