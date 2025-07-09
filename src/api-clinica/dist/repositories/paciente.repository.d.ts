import { DefaultCrudRepository } from '@loopback/repository';
import { ClinicaDbDataSource } from '../datasources';
import { Paciente, PacienteRelations } from '../models';
export declare class PacienteRepository extends DefaultCrudRepository<Paciente, typeof Paciente.prototype.idPaciente, PacienteRelations> {
    constructor(dataSource: ClinicaDbDataSource);
}
