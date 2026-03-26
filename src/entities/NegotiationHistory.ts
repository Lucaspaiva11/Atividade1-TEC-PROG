export interface NegotiationHistory {
  leadId: string;
  fromStage?: string;
  toStage?: string;
  fromStatus?: string;
  toStatus?: string;
  date: Date;
}