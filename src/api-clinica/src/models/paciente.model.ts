import {Entity, model, property} from '@loopback/repository';

@model()
export class Paciente extends Entity {
  @property({
    type: 'number',
    id: true,
    generated: true,
  })
  idPaciente?: number;

  @property({
    type: 'string',
    required: true,
  })
  nome: string;

  @property({
    type: 'date',
    required: true,
  })
  dataNascimento: string;

  @property({
    type: 'string',
  })
  morada?: string;

  @property({
    type: 'number',
    required: true,
  })
  telefone: number;


  constructor(data?: Partial<Paciente>) {
    super(data);
  }
}

export interface PacienteRelations {
  // describe navigational properties here
}

export type PacienteWithRelations = Paciente & PacienteRelations;
