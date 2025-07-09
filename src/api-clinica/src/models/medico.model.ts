import {Entity, model, property} from '@loopback/repository';

@model()
export class Medico extends Entity {
  @property({
    type: 'number',
    id: true,
    generated: true,
  })
  idMedico?: number;

  @property({
    type: 'string',
    required: true,
  })
  nome: string;

  @property({
    type: 'number',
    required: true,
  })
  telefone: number;


  constructor(data?: Partial<Medico>) {
    super(data);
  }
}

export interface MedicoRelations {
  // describe navigational properties here
}

export type MedicoWithRelations = Medico & MedicoRelations;
