import { Router } from "express";
import { ProductRoutes } from "./Product.routes";
import { SkuRoutes } from "./Sku.routes";
import { LabelRoutes } from "./Label.routes";
import { AvailabilityRegionRoutes } from "./AvailabilityRegion.routes";
import { CategoryRoutes } from "./Category.routes";

export class CatalogRoutes {
    
    public router = Router();
    private availabilityRegionRoutes = new AvailabilityRegionRoutes();
    private categoryRoutes = new CategoryRoutes();
    private productRoutes = new ProductRoutes();
    private labelRoutes = new LabelRoutes();
    private skuRoutes = new SkuRoutes();

    constructor() {
        this.register();
    }

    private register() {
        this.router.use('/availability-region/', this.availabilityRegionRoutes.router);
        this.router.use('/category/', this.categoryRoutes.router);
        this.router.use('/product/', this.productRoutes.router);
        this.router.use('/label/', this.labelRoutes.router);
        this.router.use('/sku/', this.skuRoutes.router);
    }
}