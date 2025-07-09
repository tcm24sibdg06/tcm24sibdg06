import { Entity } from '@loopback/repository';
export declare class Especialidade extends Entity {
    idEspecialidade?: number;
    nome: string;
    duracaoPadrao: number;
    constructor(data?: Partial<Especialidade>);
}
export interface EspecialidadeRelations {
}
export type EspecialidadeWithRelations = Especialidade & EspecialidadeRelations;
