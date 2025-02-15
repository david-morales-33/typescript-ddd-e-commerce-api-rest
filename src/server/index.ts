import { EnviromentConfig } from "./EnviromentConfig";
import { Server } from "./Server";

const BackendApp = new Server(EnviromentConfig.getVariable("SERVER_PORT"));

BackendApp.listen().then().catch(error => { console.log(error) })