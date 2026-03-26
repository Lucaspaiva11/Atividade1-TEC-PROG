import { ILeadObserver } from "./ILeadObserver";
import { Lead } from "../../entities/Lead";
import { HistoryRepository } from "../../repositories/INegotiationHistoryRepository";

export class HistoryObserver implements ILeadObserver {
  constructor(private historyRepository: HistoryRepository) {}

  async onLeadUpdated(lead: Lead, previousStage: string, previousStatus: string): Promise<void> {
    await this.historyRepository.create({
      leadId: lead.id,
      fromStage: previousStage,
      toStage: lead.props.stage,
      fromStatus: previousStatus,
      toStatus: lead.props.status,
      date: new Date()
    });
  }
}