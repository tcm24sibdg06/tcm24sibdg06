"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RegistoClinicoRepository = void 0;
const tslib_1 = require("tslib");
const core_1 = require("@loopback/core");
const repository_1 = require("@loopback/repository");
const datasources_1 = require("../datasources");
const models_1 = require("../models");
let RegistoClinicoRepository = class RegistoClinicoRepository extends repository_1.DefaultCrudRepository {
    constructor(dataSource, medicoRepositoryGetter, pacienteRepositoryGetter) {
        super(models_1.RegistoClinico, dataSource);
        this.medicoRepositoryGetter = medicoRepositoryGetter;
        this.pacienteRepositoryGetter = pacienteRepositoryGetter;
        this.medico = this.createBelongsToAccessorFor('medico', medicoRepositoryGetter);
        this.registerInclusionResolver('medico', this.medico.inclusionResolver);
        this.paciente = this.createBelongsToAccessorFor('paciente', pacienteRepositoryGetter);
        this.registerInclusionResolver('paciente', this.paciente.inclusionResolver);
    }
};
exports.RegistoClinicoRepository = RegistoClinicoRepository;
exports.RegistoClinicoRepository = RegistoClinicoRepository = tslib_1.__decorate([
    tslib_1.__param(0, (0, core_1.inject)('datasources.clinicaDbDataSource')),
    tslib_1.__param(1, repository_1.repository.getter('MedicoRepository')),
    tslib_1.__param(2, repository_1.repository.getter('PacienteRepository')),
    tslib_1.__metadata("design:paramtypes", [datasources_1.ClinicaDbDataSource, Function, Function])
], RegistoClinicoRepository);
//# sourceMappingURL=registo-clinico.repository.js.map