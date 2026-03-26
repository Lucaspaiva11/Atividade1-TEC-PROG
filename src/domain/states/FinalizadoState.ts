import { Lead } from "../../entities/Lead";
import { ILeadState } from "./ILeadState";

export class FinalizadoState implements ILeadState {
  advance(lead: Lead): void { throw new Error("A lead já está finalizada."); }
  win(lead: Lead): void { throw new Error("A lead já está finalizada."); }
  lose(lead: Lead): void { throw new Error("A lead já está finalizada."); }
}