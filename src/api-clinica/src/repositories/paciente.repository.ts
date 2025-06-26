import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {ClinicaDbDataSource} from '../datasources';
import {Paciente, PacienteRelations} from '../models';

export class PacienteRepository extends DefaultCrudRepository<
  Paciente,
  typeof Paciente.prototype.idPaciente,
  PacienteRelations
> {
  constructor(
    @inject('datasources.clinicaDbDataSource') dataSource: ClinicaDbDataSource,
  ) {
    super(Paciente, dataSource);
  }
}
