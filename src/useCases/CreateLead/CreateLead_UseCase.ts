import { LeadRepository } from "../../repositories/ILeadRepository";
import { CreateLeadDTO } from "./CreateLead_DTO";
import { LeadFactory } from "./CreateLead_Factory";

export class CreateLeadUseCase {
  constructor(private leadRepository: LeadRepository) {}

  async execute(dto: CreateLeadDTO) {
    // 🔗 Chain of Responsibility (validação)
    this.validate(dto);

    // 🏗️ Factory
    const lead = LeadFactory.create(dto);

    await this.leadRepository.create(lead);

    return lead;
  }

  private validate(dto: CreateLeadDTO) {
    if (!dto.name) throw new Error("Nome obrigatório");
    if (!dto.phone) throw new Error("Telefone obrigatório");

    const validSources = ["VISITA", "TELEFONE", "WHATSAPP", "INSTAGRAM"];
    if (!validSources.includes(dto.source)) {
      throw new Error("Origem inválida");
    }
  }
}