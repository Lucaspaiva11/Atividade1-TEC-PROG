import { LeadRepository } from "../../repositories/ILeadRepository";

export class ListLeadsUseCase {
  constructor(private leadRepository: LeadRepository) {}

  async execute() {
    const leads = await this.leadRepository.findAll();

    // mapeia para resposta limpa
    return leads.map((lead) => ({
      id: lead.id,
      name: lead.props.name,
      phone: lead.props.phone,
      source: lead.props.source,
      vehicle: lead.props.vehicle,
      stage: lead.props.stage,
      status: lead.props.status,
      createdAt: lead.props.createdAt,
    }));
  }
}