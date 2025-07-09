import { DefaultCrudRepository } from '@loopback/repository';
import { ClinicaDbDataSource } from '../datasources';
import { Medico, MedicoRelations } from '../models';
export declare class MedicoRepository extends DefaultCrudRepository<Medico, typeof Medico.prototype.idMedico, MedicoRelations> {
    constructor(dataSource: ClinicaDbDataSource);
}
