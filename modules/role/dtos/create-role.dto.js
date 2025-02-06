"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateRoleDto = void 0;
// Importa los decoradores de validación de la librería "class-validator".
const class_validator_1 = require("class-validator");
// Define una clase DTO (Data Transfer Object) para la creación de roles.
class CreateRoleDto {
}
exports.CreateRoleDto = CreateRoleDto;
__decorate([
    (0, class_validator_1.IsNotEmpty)()
    // Valida que el campo "name" sea una cadena de texto.
    ,
    (0, class_validator_1.IsString)()
    // Restringe la longitud del nombre entre 4 y 100 caracteres.
    ,
    (0, class_validator_1.Length)(4, 100),
    __metadata("design:type", String)
], CreateRoleDto.prototype, "name", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)()
    // Valida que el campo "description" sea una cadena de texto.
    ,
    (0, class_validator_1.IsString)()
    // Restringe la longitud de la descripción entre 4 y 255 caracteres.
    ,
    (0, class_validator_1.Length)(4, 255),
    __metadata("design:type", String)
], CreateRoleDto.prototype, "description", void 0);
