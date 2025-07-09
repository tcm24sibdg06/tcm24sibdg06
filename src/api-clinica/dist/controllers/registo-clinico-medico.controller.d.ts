import { RegistoClinico, Medico } from '../models';
import { RegistoClinicoRepository } from '../repositories';
export declare class RegistoClinicoMedicoController {
    registoClinicoRepository: RegistoClinicoRepository;
    constructor(registoClinicoRepository: RegistoClinicoRepository);
    getMedico(id: typeof RegistoClinico.prototype.idRegistoClinico): Promise<Medico>;
}
