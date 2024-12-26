import { Response } from '../../contexts/Shared/domain/cqrs/Response';
import { Request } from 'express'
import { Params } from './Params';
import { Links } from './Links';
import { Metadata } from './Metadata';
import { Body } from './Body';
import { Pagination } from './Pagination';
import { Criteria } from './Criteria';

export class ApiSuccessResponse {
    public status: string = 'OK';
    public api_message: string = 'consulta exitosa';
    public api_code: number = 1;
    public status_code: number = 200;
    public pagination?: Pagination;
    public criteria?: Criteria;
    public links?: Links;
    public data?: Response[];
    public metadata: Metadata;

    constructor() {
        this.metadata = {
            version: '1.0',
            response_time: `${0} ms`,
            timestamp: new Date()
        }
    }


    public setLinks(data: Links): ApiSuccessResponse {
        this.links = data;
        return this;

    }

    public setData(data: Response[]): ApiSuccessResponse {
        this.data = data;
        return this;
    }

    public setBody(data: Body): ApiSuccessResponse {
        this.status = data.status;
        this.api_message = data.message;
        this.api_code = data.code;
        return this;
    }

    public setPagination(req: Request): ApiSuccessResponse {
        const { query: paramsQuery } = req;
        const { items, page } = paramsQuery as Params;
        const newUrl = new URL(`${req.protocol}://${req.get('host')}${req.originalUrl}`);

        const newPagina = newUrl.searchParams.get('pagina');

        if (page !== undefined && newPagina !== null) {
            const nextPage = parseInt(newPagina) + 1;
            newUrl.searchParams.set('pagina', nextPage.toString())
        }
        this.pagination = {
            size_page: items ?? '50',
            current_page: page ?? '1',
            next_page: page ?? '1',
            next_page_url: newUrl.toString(),
        }
        return this;
    }

    public setCriteria(req: Request): ApiSuccessResponse {
        const { query: paramsQuery } = req;
        const { orden_by, orden_type } = paramsQuery as Params;

        this.criteria = {
            current_filters: req.query as Object,
            all_filters: [],
            order_by: orden_by ?? 'None',
            order_type: orden_type ?? 'None'
        }
        return this;
    }

}