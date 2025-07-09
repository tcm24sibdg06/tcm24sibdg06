import { HistoricoConsulta, Funcionario } from '../models';
import { HistoricoConsultaRepository } from '../repositories';
export declare class HistoricoConsultaFuncionarioController {
    historicoConsultaRepository: HistoricoConsultaRepository;
    constructor(historicoConsultaRepository: HistoricoConsultaRepository);
    getFuncionario(id: typeof HistoricoConsulta.prototype.idHistorico): Promise<Funcionario>;
}
