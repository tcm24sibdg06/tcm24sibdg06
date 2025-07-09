import { Count, Filter, FilterExcludingWhere, Where } from '@loopback/repository';
import { HistoricoConsulta } from '../models';
import { HistoricoConsultaRepository } from '../repositories';
export declare class HistoricoConsultaControllerController {
    historicoConsultaRepository: HistoricoConsultaRepository;
    constructor(historicoConsultaRepository: HistoricoConsultaRepository);
    create(historicoConsulta: Omit<HistoricoConsulta, 'idHistorico'>): Promise<HistoricoConsulta>;
    count(where?: Where<HistoricoConsulta>): Promise<Count>;
    find(filter?: Filter<HistoricoConsulta>): Promise<HistoricoConsulta[]>;
    updateAll(historicoConsulta: HistoricoConsulta, where?: Where<HistoricoConsulta>): Promise<Count>;
    findById(id: number, filter?: FilterExcludingWhere<HistoricoConsulta>): Promise<HistoricoConsulta>;
    updateById(id: number, historicoConsulta: HistoricoConsulta): Promise<void>;
    replaceById(id: number, historicoConsulta: HistoricoConsulta): Promise<void>;
    deleteById(id: number): Promise<void>;
}
