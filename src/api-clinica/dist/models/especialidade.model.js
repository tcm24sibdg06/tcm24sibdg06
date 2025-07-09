"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Especialidade = void 0;
const tslib_1 = require("tslib");
const repository_1 = require("@loopback/repository");
let Especialidade = class Especialidade extends repository_1.Entity {
    constructor(data) {
        super(data);
    }
};
exports.Especialidade = Especialidade;
tslib_1.__decorate([
    (0, repository_1.property)({
        type: 'number',
        id: true,
        generated: true,
    }),
    tslib_1.__metadata("design:type", Number)
], Especialidade.prototype, "idEspecialidade", void 0);
tslib_1.__decorate([
    (0, repository_1.property)({
        type: 'string',
        required: true,
    }),
    tslib_1.__metadata("design:type", String)
], Especialidade.prototype, "nome", void 0);
tslib_1.__decorate([
    (0, repository_1.property)({
        type: 'number',
        required: true,
    }),
    tslib_1.__metadata("design:type", Number)
], Especialidade.prototype, "duracaoPadrao", void 0);
exports.Especialidade = Especialidade = tslib_1.__decorate([
    (0, repository_1.model)(),
    tslib_1.__metadata("design:paramtypes", [Object])
], Especialidade);
//# sourceMappingURL=especialidade.model.js.map