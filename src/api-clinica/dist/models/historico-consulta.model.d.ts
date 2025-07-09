import { Entity } from '@loopback/repository';
export declare class HistoricoConsulta extends Entity {
    idHistorico?: number;
    dataAlteracao: string;
    tipoAlteracao: string;
    idConsulta: number;
    idFuncionario: number;
    alteracoes?: number;
    constructor(data?: Partial<HistoricoConsulta>);
}
export interface HistoricoConsultaRelations {
}
export type HistoricoConsultaWithRelations = HistoricoConsulta & HistoricoConsultaRelations;
