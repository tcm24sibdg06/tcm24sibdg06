import { Count, Filter, FilterExcludingWhere, Where } from '@loopback/repository';
import { Funcionario } from '../models';
import { FuncionarioRepository } from '../repositories';
export declare class FuncionarioControllerController {
    funcionarioRepository: FuncionarioRepository;
    constructor(funcionarioRepository: FuncionarioRepository);
    create(funcionario: Omit<Funcionario, 'idFuncionario'>): Promise<Funcionario>;
    count(where?: Where<Funcionario>): Promise<Count>;
    find(filter?: Filter<Funcionario>): Promise<Funcionario[]>;
    updateAll(funcionario: Funcionario, where?: Where<Funcionario>): Promise<Count>;
    findById(id: number, filter?: FilterExcludingWhere<Funcionario>): Promise<Funcionario>;
    updateById(id: number, funcionario: Funcionario): Promise<void>;
    replaceById(id: number, funcionario: Funcionario): Promise<void>;
    deleteById(id: number): Promise<void>;
}
