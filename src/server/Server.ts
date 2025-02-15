import express from 'express';
import cors, { CorsOptions } from 'cors';
import morgan from 'morgan';
import * as http from 'http';
import { CatalogBackendApp } from './Catalog/CatalogBackendApp';

export class Server {
    private app: express.Express;
    private port: string;
    private httpServer?: http.Server;
    private catalogBackendApp = new CatalogBackendApp();

    constructor(port: string) {
        this.port = port;
        this.app = express();
        this.config(this.app)
    }

    private config(app: express.Express): void {

        app.use(this.catalogBackendApp.router);

        app.use(cors());
        app.use(express.json());
        app.use(express.urlencoded({ extended: true }));
        app.use(morgan('dev'));
    }

    getHTTPServer() {
        return this.httpServer;
    }

    async listen(): Promise<void> {
        return new Promise(resolve => {
            this.httpServer = this.app.listen(this.port, () => {
                console.log('\n')
                console.log('===========================================================================================')
                console.log(`--Backend App is running at http://localhost:${this.port} in ${this.app.get('env')} mode...`);
                console.log('--Press CTRL-C to stop\n');
                resolve();
            })
                .on("error", (err: any) => {
                    if (err.code === "EADDRINUSE") {
                        console.log("Error: The address is in use");
                    } else {
                        console.log(err);
                    }
                });
        });
    }

    async stop(): Promise<void> {
        return new Promise((resolve, reject) => {
            if (this.httpServer) {
                this.httpServer.close(error => {
                    if (error) {
                        return reject(error);
                    }
                    return resolve();
                });
            }
            return resolve();
        });
    }
}