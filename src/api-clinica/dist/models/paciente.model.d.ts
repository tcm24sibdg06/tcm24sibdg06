import { Entity } from '@loopback/repository';
export declare class Paciente extends Entity {
    idPaciente?: number;
    nome: string;
    dataNascimento: string;
    morada?: string;
    telefone: number;
    constructor(data?: Partial<Paciente>);
}
export interface PacienteRelations {
}
export type PacienteWithRelations = Paciente & PacienteRelations;
