"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Server = void 0;
const morgan_1 = __importDefault(require("morgan"));
const cors_1 = __importDefault(require("cors"));
const helmet_1 = __importDefault(require("helmet"));
const express_1 = __importDefault(require("express"));
const _root_routes_1 = require("./modules/_root/_root.routes");
const DatabaseConnection_1 = require("./modules/database/DatabaseConnection");
class Server {
    // Constructor que inicializa la aplicación
    constructor() {
        this.app = (0, express_1.default)();
        this.port = parseInt(process.env.PORT || "4000", 10) || 4000;
        this.apiPrefix = process.env.API_PREFIX || "/api/v1";
        this.middlewares(); // Llama al método de middlewares
        this.routes(); // Llama al método de rutas
    }
    // Método privado para configurar los middlewares
    middlewares() {
        this.app.use((0, morgan_1.default)("dev")); // Logger para las peticiones HTTP
        this.app.use((0, cors_1.default)()); // Habilitar CORS para las solicitudes
        this.app.use((0, helmet_1.default)()); // Seguridad adicional en los headers HTTP
        this.app.use(express_1.default.json()); // Analizar el cuerpo de las peticiones en formato JSON
        this.app.use(express_1.default.urlencoded({ extended: true })); // Analizar el cuerpo de las peticiones codificado como urlencoded
    }
    // Método privado para configurar las rutas
    routes() {
        const routes = new _root_routes_1.RootRoutes(); // Instancia las rutas del Root
        this.app.use(this.apiPrefix, routes.router); // Usar las rutas definidas
    }
    // Método público para iniciar el servidor
    listen() {
        try {
            DatabaseConnection_1.DatabaseConnection.appDataSource
                .initialize()
                .then(() => {
                console.log("Database Connected");
                this.app.listen(this.port, () => {
                    console.log(`Server Running on: http://localhost:${this.port}${this.apiPrefix}`);
                });
                //
            })
                .catch((error) => console.log(error));
        }
        catch (error) {
            console.error("Error Starting Server", error);
        }
    }
}
exports.Server = Server;
