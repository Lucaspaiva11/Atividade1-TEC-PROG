import { Lead } from "../../entities/Lead";
import { ILeadState } from "./ILeadState";

export class AguardandoRespostaState implements ILeadState {
  advance(lead: Lead): void {
    lead.props.stage = "AGUARDANDO_PAGAMENTO";
    lead.props.updatedAt = new Date();
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