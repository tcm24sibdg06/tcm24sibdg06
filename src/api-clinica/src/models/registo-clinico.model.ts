import {Entity, model, property, belongsTo} from '@loopback/repository';
import {Medico} from './medico.model';
import {Paciente} from './paciente.model';

@model()
export class RegistoClinico extends Entity {
  @property({
    type: 'number',
    id: true,
    generated: true,
  })
  idRegistoClinico?: number;

  @property({
    type: 'date',
    required: true,
  })
  dataHora: string;

  @property({
    type: 'string',
    required: true,
  })
  descricao: string;

  @belongsTo(() => Medico, {name: 'medico'})
  idMedico: number;

  @belongsTo(() => Paciente, {name: 'paciente'})
  idPaciente: number;

  @property({
    type: 'number',
  })
  idConsulta?: number;

  constructor(data?: Partial<RegistoClinico>) {
    super(data);
  }
}

export interface RegistoClinicoRelations {
  // describe navigational properties here
}

export type RegistoClinicoWithRelations = RegistoClinico & RegistoClinicoRelations;
