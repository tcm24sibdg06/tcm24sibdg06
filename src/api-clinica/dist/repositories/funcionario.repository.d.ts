import { Getter } from '@loopback/core';
import { DefaultCrudRepository, HasManyRepositoryFactory } from '@loopback/repository';
import { ClinicaDbDataSource } from '../datasources';
import { Funcionario, HistoricoConsulta } from '../models';
import { HistoricoConsultaRepository } from './historico-consulta.repository';
export declare class FuncionarioRepository extends DefaultCrudRepository<Funcionario, typeof Funcionario.prototype.idFuncionario> {
    protected historicoConsultaRepositoryGetter: Getter<HistoricoConsultaRepository>;
    readonly historicoConsultas: HasManyRepositoryFactory<HistoricoConsulta, typeof Funcionario.prototype.idFuncionario>;
    constructor(dataSource: ClinicaDbDataSource, historicoConsultaRepositoryGetter: Getter<HistoricoConsultaRepository>);
}
