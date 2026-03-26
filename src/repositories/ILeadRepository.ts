import { Lead } from "../entities/Lead";

export interface LeadRepository {
  create(lead: Lead): Promise<void>;
  findAll(): Promise<Lead[]>;
  findById(id: string): Promise<Lead | null>;
  update(lead: Lead): Promise<void>;
}