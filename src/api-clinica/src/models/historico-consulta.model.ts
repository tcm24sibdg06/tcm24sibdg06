import {Entity, model, property, belongsTo} from '@loopback/repository';
import {Consulta} from './consulta.model';
import {Funcionario} from './funcionario.model';

@model()
export class HistoricoConsulta extends Entity {
  @property({
    type: 'number',
    id: true,
    generated: true,
  })
  idHistorico?: number;

  @property({
    type: 'date',
    required: true,
  })
  dataAlteracao: string;

  @property({
    type: 'string',
    required: true,
  })
  tipoAlteracao: string;

  @belongsTo(() => Consulta, {name: 'consulta'})
  idConsulta: number;

  @belongsTo(() => Funcionario, {name: 'funcionario'})
  idFuncionario: number;

  @property({
    type: 'number',
  })
  alteracoes?: number;

  constructor(data?: Partial<HistoricoConsulta>) {
    super(data);
  }
}

export interface HistoricoConsultaRelations {
  // describe navigational properties here
}

export type HistoricoConsultaWithRelations = HistoricoConsulta & HistoricoConsultaRelations;
