"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SeederController = void 0;
// Importa la entidad RoleEntity, que representa la tabla de roles en la base de datos.
const role_entity_1 = require("../../role/entities/role.entity");
// Importa la entidad UserEntity, que representa la tabla de usuarios en la base de datos.
const user_entity_1 = require("../../user/entities/user.entity");
// Importa la clase DatabaseConnection para obtener la conexión con la base de datos.
const DatabaseConnection_1 = require("../../database/DatabaseConnection");
// Importa la utilidad BcryptUtil para hashear contraseñas de forma segura.
const bcrypt_util_1 = require("../../../utils/bcrypt.util");
// Importa la función plainToClass para convertir objetos planos en instancias de clases.
const class_transformer_1 = require("class-transformer");
// Define la clase SeederController que se encargará de crear roles y usuarios de prueba en la base de datos.
class SeederController {
    // Constructor de la clase que inicializa los repositorios utilizando la conexión a la base de datos.
    constructor() {
        this.roleRepository =
            DatabaseConnection_1.DatabaseConnection.appDataSource.getRepository(role_entity_1.RoleEntity // Obtiene el repositorio para la entidad RoleEntity.
            );
        this.userRepository =
            DatabaseConnection_1.DatabaseConnection.appDataSource.getRepository(user_entity_1.UserEntity // Obtiene el repositorio para la entidad UserEntity.
            );
    }
    // Método público asincrónico que siembra roles y usuarios en la base de datos.
    seedRolesUsers(_, // No se usa la solicitud (por eso el guion bajo).
    res // Respuesta HTTP que se enviará al cliente.
    ) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                /* Admin Seed */
                // Crea y guarda un rol de administrador en la base de datos.
                const adminRole = yield this.roleRepository.save((0, class_transformer_1.plainToClass)(role_entity_1.RoleEntity, {
                    name: "admin", // Nombre del rol.
                    description: "Admin Role", // Descripción del rol.
                }));
                // Crea y guarda un usuario administrador asociado al rol creado anteriormente.
                const adminUser = yield this.userRepository.save((0, class_transformer_1.plainToClass)(user_entity_1.UserEntity, {
                    name: "Administrator", // Nombre del usuario.
                    surname: "System", // Apellido del usuario.
                    email: "admin@admin.com", // Correo electrónico del usuario.
                    password: yield bcrypt_util_1.BcryptUtil.hashPassword("12345678" // Hashea la contraseña antes de guardarla en la base de datos.
                    ),
                    role_id: adminRole.id, // Asocia el usuario con el rol de administrador.
                }));
                /* Admin Seed */
                /* User Seed */
                // Crea y guarda un rol de usuario estándar en la base de datos.
                const userRole = yield this.roleRepository.save((0, class_transformer_1.plainToClass)(role_entity_1.RoleEntity, {
                    name: "user", // Nombre del rol.
                    description: "User Role", // Descripción del rol.
                }));
                // Crea y guarda un usuario estándar asociado al rol de usuario.
                const userUser = yield this.userRepository.save((0, class_transformer_1.plainToClass)(user_entity_1.UserEntity, {
                    name: "User", // Nombre del usuario.
                    surname: "System", // Apellido del usuario.
                    email: "user@user.com", // Correo electrónico del usuario.
                    password: yield bcrypt_util_1.BcryptUtil.hashPassword("12345678" // Hashea la contraseña del usuario.
                    ),
                    role_id: userRole.id, // Asocia el usuario con el rol de usuario.
                }));
                /* User Seed */
                /* Guest Seed */
                // Crea y guarda un rol de invitado en la base de datos.
                const guestRole = yield this.roleRepository.save((0, class_transformer_1.plainToClass)(role_entity_1.RoleEntity, {
                    name: "guest", // Nombre del rol.
                    description: "Guest Role", // Descripción del rol.
                }));
                // Crea y guarda un usuario invitado asociado al rol de invitado.
                const guestUser = yield this.userRepository.save((0, class_transformer_1.plainToClass)(user_entity_1.UserEntity, {
                    name: "Guest", // Nombre del usuario.
                    surname: "System", // Apellido del usuario.
                    email: "guest@guest.com", // Correo electrónico del usuario.
                    password: yield bcrypt_util_1.BcryptUtil.hashPassword("12345678" // Hashea la contraseña del usuario.
                    ),
                    role_id: guestRole.id, // Asocia el usuario con el rol de invitado.
                }));
                /* Guest Seed */
                // Devuelve una respuesta HTTP 200 con un mensaje de éxito y los datos de los roles y usuarios creados.
                return res.status(200).json({
                    message: "Roles and Users Seeded Successfully", // Mensaje de éxito.
                    data: {
                        adminRole,
                        adminUser,
                        userRole,
                        userUser,
                        guestRole,
                        guestUser,
                    },
                });
            }
            catch (error) {
                // En caso de error, devuelve una respuesta HTTP 500 con un mensaje de error y la información del error.
                return res.status(500).json({
                    message: "Error Seeding Roles and Users", // Mensaje de error.
                    data: error, // Información detallada del error.
                });
            }
        });
    }
}
exports.SeederController = SeederController;
