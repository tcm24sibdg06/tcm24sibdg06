"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EspecialidadeRepository = void 0;
const tslib_1 = require("tslib");
const core_1 = require("@loopback/core");
const repository_1 = require("@loopback/repository");
const datasources_1 = require("../datasources");
const models_1 = require("../models");
let EspecialidadeRepository = class EspecialidadeRepository extends repository_1.DefaultCrudRepository {
    constructor(dataSource, consultaRepositoryGetter) {
        super(models_1.Especialidade, dataSource);
        this.consultaRepositoryGetter = consultaRepositoryGetter;
        this.consultas = this.createHasManyRepositoryFactoryFor('consultas', consultaRepositoryGetter);
        this.registerInclusionResolver('consultas', this.consultas.inclusionResolver);
    }
};
exports.EspecialidadeRepository = EspecialidadeRepository;
exports.EspecialidadeRepository = EspecialidadeRepository = tslib_1.__decorate([
    tslib_1.__param(0, (0, core_1.inject)('datasources.clinicaDbDataSource')),
    tslib_1.__param(1, repository_1.repository.getter('ConsultaRepository')),
    tslib_1.__metadata("design:paramtypes", [datasources_1.ClinicaDbDataSource, Function])
], EspecialidadeRepository);
//# sourceMappingURL=especialidade.repository.js.map