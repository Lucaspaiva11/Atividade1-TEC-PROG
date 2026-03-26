import { Lead } from "../../entities/Lead";
import { ILeadState } from "./ILeadState";

export class ContatoInicialState implements ILeadState {
  advance(lead: Lead): void {
    lead.props.stage = "ENVIOU_PROPOSTA";
    lead.props.status = "EM_NEGOCIACAO";
    lead.props.updatedAt = new Date();
  }
  win(lead: Lead): void {
    throw new Error("Não é possível ganhar uma negociação no contato inicial sem enviar proposta.");
  }
  lose(lead: Lead): void {
    lead.props.status = "FINALIZADO_SEM_VENDA";
    lead.props.updatedAt = new Date();
  }
}