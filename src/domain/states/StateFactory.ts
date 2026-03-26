import { Lead } from "../../entities/Lead";
import { ILeadState } from "./ILeadState";
import { ContatoInicialState } from "./ContatoInicialState";
import { EnviouPropostaState } from "./EnviouPropostaState";
import { AguardandoRespostaState } from "./AguardandoRespostaState";
import { AguardandoPagamentoState } from "./AguardandoPagamentoState";
import { FinalizadoState } from "./FinalizadoState";

export class StateFactory {
  static getState(lead: Lead): ILeadState {
    if (lead.props.status.includes("FINALIZADO")) {
      return new FinalizadoState();
    }

    switch (lead.props.stage) {
      case "CONTATO_INICIAL": return new ContatoInicialState();
      case "ENVIOU_PROPOSTA": return new EnviouPropostaState();
      case "AGUARDANDO_RESPOSTA": return new AguardandoRespostaState();
      case "AGUARDANDO_PAGAMENTO": return new AguardandoPagamentoState();
      default: throw new Error("Estágio desconhecido.");
    }
  }
}