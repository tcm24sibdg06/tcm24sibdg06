import { Entity } from '@loopback/repository';
export declare class Medico extends Entity {
    idMedico?: number;
    nome: string;
    telefone: number;
    constructor(data?: Partial<Medico>);
}
export interface MedicoRelations {
}
export type MedicoWithRelations = Medico & MedicoRelations;
