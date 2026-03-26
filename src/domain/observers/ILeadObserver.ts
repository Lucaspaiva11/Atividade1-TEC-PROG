import { Lead } from "../../entities/Lead";

export interface ILeadObserver {
  onLeadUpdated(lead: Lead, previousStage: string, previousStatus: string): Promise<void>;
}