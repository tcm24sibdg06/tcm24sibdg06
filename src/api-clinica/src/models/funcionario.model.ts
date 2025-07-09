import {Entity, model, property} from '@loopback/repository';

@model()
export class Funcionario extends Entity {
  @property({
    type: 'number',
    id: true,
    generated: true,
  })
  idFuncionario?: number;

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


  constructor(data?: Partial<Funcionario>) {
    super(data);
  }
}

export interface FuncionarioRelations {
  // describe navigational properties here
}

export type FuncionarioWithRelations = Funcionario & FuncionarioRelations;
