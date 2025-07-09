import { Getter } from '@loopback/core';
import { DefaultCrudRepository, HasManyRepositoryFactory } from '@loopback/repository';
import { ClinicaDbDataSource } from '../datasources';
import { Consulta, Especialidade } from '../models';
import { ConsultaRepository } from './consulta.repository';
export declare class EspecialidadeRepository extends DefaultCrudRepository<Especialidade, typeof Especialidade.prototype.idEspecialidade> {
    protected consultaRepositoryGetter: Getter<ConsultaRepository>;
    readonly consultas: HasManyRepositoryFactory<Consulta, typeof Especialidade.prototype.idEspecialidade>;
    constructor(dataSource: ClinicaDbDataSource, consultaRepositoryGetter: Getter<ConsultaRepository>);
}
