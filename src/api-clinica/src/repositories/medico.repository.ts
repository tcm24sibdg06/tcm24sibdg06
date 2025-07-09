import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {ClinicaDbDataSource} from '../datasources';
import {Medico, MedicoRelations} from '../models';

export class MedicoRepository extends DefaultCrudRepository<
  Medico,
  typeof Medico.prototype.idMedico,
  MedicoRelations
> {
  constructor(
    @inject('datasources.clinicaDbDataSource') dataSource: ClinicaDbDataSource,
  ) {
    super(Medico, dataSource);
  }
}
