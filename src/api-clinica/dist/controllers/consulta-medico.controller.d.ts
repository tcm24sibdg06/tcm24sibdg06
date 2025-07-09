import { Consulta, Medico } from '../models';
import { ConsultaRepository } from '../repositories';
export declare class ConsultaMedicoController {
    consultaRepository: ConsultaRepository;
    constructor(consultaRepository: ConsultaRepository);
    getMedico(id: typeof Consulta.prototype.idConsulta): Promise<Medico>;
}
