import { Response } from "../../../../Shared/domain/cqrs/Response";
import { ProductDTO } from "../../domain/ProductDTO";

export class ProductResponse extends ProductDTO implements Response{}