import { RegistoClinico, Paciente } from '../models';
import { RegistoClinicoRepository } from '../repositories';
export declare class RegistoClinicoPacienteController {
    registoClinicoRepository: RegistoClinicoRepository;
    constructor(registoClinicoRepository: RegistoClinicoRepository);
    getPaciente(id: typeof RegistoClinico.prototype.idRegistoClinico): Promise<Paciente>;
}
