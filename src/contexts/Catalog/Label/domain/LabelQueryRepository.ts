import { Label } from "./Label";

export interface LabelQueryRepository {
    searchAll(): Promise<Label[]>;
}