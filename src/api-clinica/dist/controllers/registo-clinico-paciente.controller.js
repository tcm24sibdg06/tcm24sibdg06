"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RegistoClinicoPacienteController = void 0;
const tslib_1 = require("tslib");
const repository_1 = require("@loopback/repository");
const rest_1 = require("@loopback/rest");
const models_1 = require("../models");
const repositories_1 = require("../repositories");
let RegistoClinicoPacienteController = class RegistoClinicoPacienteController {
    constructor(registoClinicoRepository) {
        this.registoClinicoRepository = registoClinicoRepository;
    }
    async getPaciente(id) {
        return this.registoClinicoRepository.paciente(id);
    }
};
exports.RegistoClinicoPacienteController = RegistoClinicoPacienteController;
tslib_1.__decorate([
    (0, rest_1.get)('/registo-clinicos/{id}/paciente', {
        responses: {
            '200': {
                description: 'Paciente belonging to RegistoClinico',
                content: {
                    'application/json': {
                        schema: (0, rest_1.getModelSchemaRef)(models_1.Paciente),
                    },
                },
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.path.number('id')),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", Promise)
], RegistoClinicoPacienteController.prototype, "getPaciente", null);
exports.RegistoClinicoPacienteController = RegistoClinicoPacienteController = tslib_1.__decorate([
    tslib_1.__param(0, (0, repository_1.repository)(repositories_1.RegistoClinicoRepository)),
    tslib_1.__metadata("design:paramtypes", [repositories_1.RegistoClinicoRepository])
], RegistoClinicoPacienteController);
//# sourceMappingURL=registo-clinico-paciente.controller.js.map