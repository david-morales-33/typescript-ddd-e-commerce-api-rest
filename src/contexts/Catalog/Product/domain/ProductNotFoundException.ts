import { DomainException } from "../../../Shared/exceptions/DomainException";

export class ProductNotFoundException extends DomainException {
    constructor(value: string) {
        super(`The product <${value}> not found`);
    }
}