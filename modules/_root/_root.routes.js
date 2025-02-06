"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RootRoutes = void 0;
const express_1 = require("express"); // Importa el enrutador de Express
const _root_controller_1 = require("./_root.controller"); // Importa el controlador de la raíz
const role_routes_1 = require("../role/routes/role.routes"); // Importa las rutas de los roles
const user_routes_1 = require("../user/routes/user.routes"); // Importa las rutas de los usuarios
const auth_routes_1 = require("../auth/routes/auth.routes"); // Importa las rutas de autenticación
const seeder_routes_1 = require("../seeder/routes/seeder.routes");
const tokenExists_middleware_1 = require("../../core/middlewares/tokenExists.middleware");
const isAdmin_middleware_1 = require("../../core/middlewares/isAdmin.middleware");
class RootRoutes {
    // Constructor que inicializa las rutas y controladores
    constructor() {
        this.router = (0, express_1.Router)(); // Inicializa el enrutador
        this.apiPrefix = process.env.API_PREFIX || "/api/v1"; // Prefijo de la API
        this.initializeRoutes(); // Llama al método para inicializar las rutas
    }
    // Método privado para definir las rutas
    initializeRoutes() {
        // Registrar la ruta raíz usando el prefijo de la API
        this.router.get("/", _root_controller_1.RootController.root.bind(_root_controller_1.RootController));
        this.router.use("/roles", tokenExists_middleware_1.TokenExistsMiddleware.check, isAdmin_middleware_1.IsAdminMiddleware.check, new role_routes_1.RoleRoutes().router); // Registrar las rutas de los roles
        this.router.use("/users", tokenExists_middleware_1.TokenExistsMiddleware.check, // Verifica si el token existe
        isAdmin_middleware_1.IsAdminMiddleware.check, // Verifica si el usuario es administrador
        new user_routes_1.UserRoutes().router); // Registrar las rutas de los usuarios
        this.router.use("/auth", new auth_routes_1.AuthRoutes().router); // Registrar las rutas de autenticación
        this.router.use("/seed", new seeder_routes_1.SeederRoutes().router); // Registrar las rutas de seeder
    }
}
exports.RootRoutes = RootRoutes;
