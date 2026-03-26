import { Lead } from "../../entities/Lead";

export interface ILeadState {
  advance(lead: Lead): void;
  win(lead: Lead): void;
  lose(lead: Lead): void;
}