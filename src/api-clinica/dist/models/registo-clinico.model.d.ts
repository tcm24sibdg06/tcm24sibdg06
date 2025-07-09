import { Entity } from '@loopback/repository';
export declare class RegistoClinico extends Entity {
    idRegistoClinico?: number;
    dataHora: string;
    descricao: string;
    idMedico: number;
    idPaciente: number;
    idConsulta?: number;
    constructor(data?: Partial<RegistoClinico>);
}
export interface RegistoClinicoRelations {
}
export type RegistoClinicoWithRelations = RegistoClinico & RegistoClinicoRelations;
