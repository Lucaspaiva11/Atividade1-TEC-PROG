import { Lead } from "../../entities/Lead";
import { LeadRepository } from "../ILeadRepository";

export class InMemoryLeadRepository implements LeadRepository {
  private leads: Lead[] = [];

  async create(lead: Lead) {
    this.leads.push(lead);
  }

  async findAll() {
    return this.leads;
  }

  async findById(id: string) {
    return this.leads.find(l => l.id === id) ?? null;
  }

  async update(lead: Lead) {
    const index = this.leads.findIndex(l => l.id === lead.id);
    this.leads[index] = lead;
  }
}

export const leadRepository = new InMemoryLeadRepository();