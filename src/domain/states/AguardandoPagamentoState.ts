import { Lead } from "../../entities/Lead";
import { ILeadState } from "./ILeadState";

export class AguardandoPagamentoState implements ILeadState {
  advance(lead: Lead): void {
    throw new Error("Este é o último estágio. Apenas marque como ganho ou perdido.");
  }
  win(lead: Lead): void {
    lead.props.status = "FINALIZADO_COM_VENDA";
    lead.props.updatedAt = new Date();
  }
  lose(lead: Lead): void {
    lead.props.status = "FINALIZADO_SEM_VENDA";
    lead.props.updatedAt = new Date();
  }
}