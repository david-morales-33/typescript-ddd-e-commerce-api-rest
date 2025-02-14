import { Router } from 'express';
import { CatalogRoutes } from './routes/index.routes';

export class CatalogBackendApp {
    public router = Router();
    private catalogRoutes = new CatalogRoutes();

    constructor() {
        this.register();
    }

    private register() {
        this.router.use('/catalog/', this.catalogRoutes.router);
    }
}