import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {DbDataSource} from '../datasources';
import {Medico, MedicoRelations} from '../models';

export class MedicoRepository extends DefaultCrudRepository<
  Medico,
  typeof Medico.prototype.idMedico,
  MedicoRelations
> {
  constructor(
    @inject('datasources.db') dataSource: DbDataSource,
  ) {
    super(Medico, dataSource);
  }
}
