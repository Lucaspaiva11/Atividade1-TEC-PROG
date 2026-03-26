import { LeadRepository } from "../repositories/ILeadRepository";
import { ILeadObserver } from "../domain/observers/ILeadObserver";
import { StateFactory } from "../domain/states/StateFactory";

export class LeadEvolutionFacade {
  private observers: ILeadObserver[] = [];

  constructor(private leadRepository: LeadRepository) {}

  addObserver(observer: ILeadObserver): void {
    this.observers.push(observer);
  }

  async processAction(leadId: string, action: "advance" | "win" | "lose"): Promise<void> {
    const lead = await this.leadRepository.findById(leadId);
    if (!lead) throw new Error("Lead não encontrada.");

    const previousStage = lead.props.stage;
    const previousStatus = lead.props.status;

    const currentState = StateFactory.getState(lead);
    
    // Executa a ação baseada no padrão State
    if (action === "advance") currentState.advance(lead);
    if (action === "win") currentState.win(lead);
    if (action === "lose") currentState.lose(lead);

    // Salva a lead atualizada
    await this.leadRepository.update(lead);

    // Notifica os observadores (ex: salva o histórico)
    for (const observer of this.observers) {
      await observer.onLeadUpdated(lead, previousStage, previousStatus);
    }
  }
}