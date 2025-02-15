import path from 'path'
import dotenv from 'dotenv'

const envPath = path.join(__dirname, '../../..', '.env');
envPath ? dotenv.config({ path: envPath }) : dotenv.config()

export class EnviromentConfig {
    public static getVariable(variable: string) {
        const value = process.env[variable]
        console.log(envPath)
        if (!value)
            throw new Error(`La variable de entorno ${variable}, no fue proporcionada`)
        return value;
    }
}