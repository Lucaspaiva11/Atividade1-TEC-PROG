import { EvolveLeadDTO } from "./EvolveLead_DTO";
import { LeadEvolutionFacade } from "../../facades/LeadEvolutionFacade";

export class EvolveLeadUseCase {
  constructor(private facade: LeadEvolutionFacade) {}

  async execute({ id, action }: EvolveLeadDTO): Promise<void> {
    if (!["advance", "win", "lose"].includes(action)) {
      throw new Error("Ação inválida. Use 'advance', 'win' ou 'lose'.");
    }
    await this.facade.processAction(id, action);
  }
}