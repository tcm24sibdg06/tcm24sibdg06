import { Entity } from '@loopback/repository';
import { HistoricoConsulta } from './historico-consulta.model';
import { RegistoClinico } from './registo-clinico.model';
export declare class Consulta extends Entity {
    idConsulta?: number;
    dataHora: string;
    observacoes?: string;
    idPaciente: number;
    idMedico: number;
    idEspecialidade: number;
    alteracoes: HistoricoConsulta[];
    registoClinico: RegistoClinico;
    constructor(data?: Partial<Consulta>);
}
export interface ConsultaRelations {
}
export type ConsultaWithRelations = Consulta & ConsultaRelations;
