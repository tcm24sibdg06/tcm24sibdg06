import { Getter } from '@loopback/core';
import { BelongsToAccessor, DefaultCrudRepository } from '@loopback/repository';
import { ClinicaDbDataSource } from '../datasources';
import { Consulta, Funcionario, HistoricoConsulta, HistoricoConsultaRelations } from '../models';
import { ConsultaRepository } from './consulta.repository';
import { FuncionarioRepository } from './funcionario.repository';
export declare class HistoricoConsultaRepository extends DefaultCrudRepository<HistoricoConsulta, typeof HistoricoConsulta.prototype.idHistorico, HistoricoConsultaRelations> {
    protected consultaRepositoryGetter: Getter<ConsultaRepository>;
    protected funcionarioRepositoryGetter: Getter<FuncionarioRepository>;
    readonly consulta: BelongsToAccessor<Consulta, typeof HistoricoConsulta.prototype.idHistorico>;
    readonly funcionario: BelongsToAccessor<Funcionario, typeof HistoricoConsulta.prototype.idHistorico>;
    constructor(dataSource: ClinicaDbDataSource, consultaRepositoryGetter: Getter<ConsultaRepository>, funcionarioRepositoryGetter: Getter<FuncionarioRepository>);
}
