import { Metadata } from "./Metadata";

export interface Exception {
    type: string;
    detail: string;
};


interface Body {
    status: string;
    message: string;
    code: number;
    status_code?: number;
}
export class ApiFaildResponese {
    public status: string = 'ERROR';
    public api_message: string = 'La consulta ha fallado';
    public api_code: number = -1;
    public status_code: number = 500;
    public meta_data: Metadata;
    public error?: Exception;

    constructor() {
        this.meta_data = {
            version: '1.0',
            response_time: `${0} ms`,
            timestamp: new Date()
        }
    }

    public setBody(data: Body): ApiFaildResponese {
        this.status = data.status;
        this.api_message = data.message;
        this.api_code = data.code;
        this.status_code = data.status_code ?? 500
        return this;
    }

    public setError(error: Exception): ApiFaildResponese {
        this.error = error;
        return this;
    }

    public setGenericException(error: unknown): ApiFaildResponese {
        // if (error instanceof PersistenceException) {
        //     this.error = {
        //         type: 'Error en capa de persistencia',
        //         detail: error.message,
        //     };
        //     this.setBody({
        //         code: -1,
        //         status: 'ERROR',
        //         message: 'La consulta ha fallado',
        //         status_code: 500
        //     })
        // }

        // else if (error instanceof FilterStructureNotValidException) {
        //     this.error = {
        //         type: 'Error en campos de entrada',
        //         detail: error.message,
        //     }
        //     this.setBody({
        //         code: -1,
        //         status: 'ERROR',
        //         message: 'La consulta ha fallado',
        //         status_code: 500
        //     });
        // }

        // else if (error instanceof EmptyQueryException) {
        //     this.error = {
        //         type: 'Respuesta vacía',
        //         detail: error.message,
        //     }
        //     this.setBody({
        //         code: 0,
        //         status: 'NOT_FOUND',
        //         message: 'Sin resultados',
        //         status_code: 404
        //     });
        // }

        // else {
        //     this.error = {
        //         type: 'Error de servidor',
        //         detail: 'Error interno de servidor',
        //     }
        //     this.setBody({
        //         code: 0,
        //         status: 'INTERNAL_SERVER_ERROR',
        //         message: 'No se pudo procesar la solicitud',
        //         status_code: 500
        //     });
        // };
        return this;
    }
}