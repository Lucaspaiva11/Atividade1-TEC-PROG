import { NegotiationHistory } from "../entities/NegotiationHistory";

export interface HistoryRepository {
  create(entry: NegotiationHistory): Promise<void>;
  findByLeadId(leadId: string): Promise<NegotiationHistory[]>;
}