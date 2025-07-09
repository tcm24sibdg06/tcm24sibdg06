"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HistoricoConsultaConsultaController = void 0;
const tslib_1 = require("tslib");
const repository_1 = require("@loopback/repository");
const rest_1 = require("@loopback/rest");
const models_1 = require("../models");
const repositories_1 = require("../repositories");
let HistoricoConsultaConsultaController = class HistoricoConsultaConsultaController {
    constructor(historicoConsultaRepository) {
        this.historicoConsultaRepository = historicoConsultaRepository;
    }
    async getConsulta(id) {
        return this.historicoConsultaRepository.consulta(id);
    }
};
exports.HistoricoConsultaConsultaController = HistoricoConsultaConsultaController;
tslib_1.__decorate([
    (0, rest_1.get)('/historico-consultas/{id}/consulta', {
        responses: {
            '200': {
                description: 'Consulta belonging to HistoricoConsulta',
                content: {
                    'application/json': {
                        schema: (0, rest_1.getModelSchemaRef)(models_1.Consulta),
                    },
                },
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.path.number('id')),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", Promise)
], HistoricoConsultaConsultaController.prototype, "getConsulta", null);
exports.HistoricoConsultaConsultaController = HistoricoConsultaConsultaController = tslib_1.__decorate([
    tslib_1.__param(0, (0, repository_1.repository)(repositories_1.HistoricoConsultaRepository)),
    tslib_1.__metadata("design:paramtypes", [repositories_1.HistoricoConsultaRepository])
], HistoricoConsultaConsultaController);
//# sourceMappingURL=historico-consulta-consulta.controller.js.map