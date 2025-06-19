import {belongsTo, Entity, hasMany, hasOne, model, property} from '@loopback/repository';
import {Especialidade} from './especialidade.model';
import {HistoricoConsulta} from './historico-consulta.model';
import {Medico} from './medico.model';
import {Paciente} from './paciente.model';
import {RegistoClinico} from './registo-clinico.model';

@model()
export class Consulta extends Entity {
  @property({
    type: 'number',
    id: true,
    generated: true,
  })
  idConsulta?: number;

  @property({
    type: 'date',
    required: true,
  })
  dataHora: string;

  @property({
    type: 'string',
  })
  observacoes?: string;

  @belongsTo(() => Paciente, {name: 'paciente'})
  idPaciente: number;

  @belongsTo(() => Medico, {name: 'medico'})
  idMedico: number;

  @belongsTo(() => Especialidade, {name: 'especialidade'})
  idEspecialidade: number;

  @hasMany(() => HistoricoConsulta, {keyTo: 'idConsulta'})
  alteracoes: HistoricoConsulta[];

  @hasOne(() => RegistoClinico, {keyTo: 'idConsulta'})
  registoClinico: RegistoClinico;

  constructor(data?: Partial<Consulta>) {
    super(data);
  }
}

export interface ConsultaRelations {
  // describe navigational properties here
}

export type ConsultaWithRelations = Consulta & ConsultaRelations;
