// CORREÇÃO: Importando as implementações reais e a instância em memória compartilhada
import { leadRepository } from "../../repositories/implementations/LeadRepository";
import { InMemoryHistoryRepository } from "../../repositories/implementations/NegotiationHistoryRepository";
import { LeadEvolutionFacade } from "../../facades/LeadEvolutionFacade";
import { HistoryObserver } from "../../domain/observers/HistoryObserver";
import { EvolveLeadUseCase } from "./EvolveLead_UseCase";
import { EvolveLeadController } from "./EvolveLead_Controller";

// Instancia repositórios
// Usamos a instância 'leadRepository' que já foi exportada para manter os dados vivos
const historyRepository = new InMemoryHistoryRepository();

// Instancia Facade e Observer
const facade = new LeadEvolutionFacade(leadRepository);
const historyObserver = new HistoryObserver(historyRepository);
facade.addObserver(historyObserver);

// Instancia UseCase e Controller
const evolveLeadUseCase = new EvolveLeadUseCase(facade);
const evolveLeadController = new EvolveLeadController(evolveLeadUseCase);

export { evolveLeadController };