"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.VerifyIdMiddleware = void 0;
// Clase que define el middleware para verificar el ID
class VerifyIdMiddleware {
    // Método estático para verificar el ID en la solicitud
    static validate(req, res, next) {
        // Verificar si el parámetro `id` está presente
        if (!req.params.id) {
            return res.status(400).json({
                message: "Id Is Required",
                data: null,
            });
        }
        // Verificar si el parámetro `id` es un número válido
        if (isNaN(parseInt(req.params.id))) {
            return res.status(400).json({
                message: "Id Must Be A Number",
                data: null,
            });
        }
        // Pasar al siguiente middleware o controlador si todo está bien
        next();
    }
}
exports.VerifyIdMiddleware = VerifyIdMiddleware;
