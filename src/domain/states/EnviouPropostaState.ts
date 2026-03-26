import { Lead } from "../../entities/Lead";
import { ILeadState } from "./ILeadState";

export class EnviouPropostaState implements ILeadState {
  advance(lead: Lead): void {
    lead.props.stage = "AGUARDANDO_RESPOSTA";
    lead.props.updatedAt = new Date();
  }
  win(lead: Lead): void {
    throw new Error("Aguarde a resposta do cliente antes de finalizar a venda.");
  }
  lose(lead: Lead): void {
    lead.props.status = "FINALIZADO_SEM_VENDA";
    lead.props.updatedAt = new Date();
  }
}