import { NegotiationHistory } from "../../entities/NegotiationHistory";
import { HistoryRepository } from "../INegotiationHistoryRepository";

export class InMemoryHistoryRepository implements HistoryRepository {
  private history: NegotiationHistory[] = [];

  async create(entry: NegotiationHistory) {
    this.history.push(entry);
  }

  async findByLeadId(leadId: string) {
    return this.history.filter(h => h.leadId === leadId);
  }
}