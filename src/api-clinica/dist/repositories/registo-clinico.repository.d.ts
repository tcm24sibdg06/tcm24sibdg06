import { Getter } from '@loopback/core';
import { BelongsToAccessor, DefaultCrudRepository } from '@loopback/repository';
import { ClinicaDbDataSource } from '../datasources';
import { Medico, Paciente, RegistoClinico, RegistoClinicoRelations } from '../models';
import { MedicoRepository } from './medico.repository';
import { PacienteRepository } from './paciente.repository';
export declare class RegistoClinicoRepository extends DefaultCrudRepository<RegistoClinico, typeof RegistoClinico.prototype.idRegistoClinico, RegistoClinicoRelations> {
    protected medicoRepositoryGetter: Getter<MedicoRepository>;
    protected pacienteRepositoryGetter: Getter<PacienteRepository>;
    readonly medico: BelongsToAccessor<Medico, typeof RegistoClinico.prototype.idRegistoClinico>;
    readonly paciente: BelongsToAccessor<Paciente, typeof RegistoClinico.prototype.idRegistoClinico>;
    constructor(dataSource: ClinicaDbDataSource, medicoRepositoryGetter: Getter<MedicoRepository>, pacienteRepositoryGetter: Getter<PacienteRepository>);
}
