import { ProductTypeDTO } from "./ProductTypeDTO";
import { ProductTypeId } from "./ProductTypeId";
import { ProductTypeValue } from "./ProductTypeValue";

export class ProductType {
    constructor(
        public readonly id: ProductTypeId,
        public readonly value: ProductTypeValue,
    ) { }

    public static fromPrimitives(data: ProductTypeDTO) {
        return new ProductType(
            new ProductTypeId(data.id),
            new ProductTypeValue(data.value)
        )
    }
    toPrimitives(): ProductTypeDTO {
        return new ProductTypeDTO(this.id.value, this.value.value)
    }
}