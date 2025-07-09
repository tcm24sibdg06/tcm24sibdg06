import { Entity } from '@loopback/repository';
export declare class Funcionario extends Entity {
    idFuncionario?: number;
    nome: string;
    telefone: number;
    constructor(data?: Partial<Funcionario>);
}
export interface FuncionarioRelations {
}
export type FuncionarioWithRelations = Funcionario & FuncionarioRelations;
