import { EnviromentConfig } from "../../../../../../server/EnviromentConfig";
import { TypeOrmConfig } from "../../../../../Shared/infrastructure/Persistence/TypeORM/TypeOrmConfig";

export class TypeormConfigFactory {
    public static createConfig(): TypeOrmConfig {
        return {
            username:  EnviromentConfig.getVariable("DB_CATALOG_USER"),
            host: EnviromentConfig.getVariable("DB_CATALOG_HOST"),
            password: EnviromentConfig.getVariable("DB_CATALOG_PASSWORD"),
            database: EnviromentConfig.getVariable("DB_CATALOG_DATABASE"),
            port: parseInt(EnviromentConfig.getVariable("DB_CATALOG_PORT"))
        }
    }
}