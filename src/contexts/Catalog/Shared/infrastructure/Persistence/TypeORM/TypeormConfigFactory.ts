import { EnviromentConfig } from "../../../../../../server/Catalog/EnviromentConfig";
import { TypeOrmConfig } from "../../../../../Shared/infrastructure/Persistence/TypeORM/TypeOrmConfig";

export class TypeormConfigFactory {
    public static createConfig(): TypeOrmConfig {
        const env = new EnviromentConfig();
        return {
            username: env.DB_USER,
            host: env.DB_HOST,
            password: env.DB_PASSWORD,
            database: env.DB_DATABASE,
            port: parseInt(env.DB_PORT)
        }
    }
}