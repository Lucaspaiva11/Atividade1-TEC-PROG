import crypto from "crypto";

export type LeadStatus =
  | "ABERTO"
  | "EM_NEGOCIACAO"
  | "FINALIZADO_COM_VENDA"
  | "FINALIZADO_SEM_VENDA";

export type LeadStage =
  | "CONTATO_INICIAL"
  | "ENVIOU_PROPOSTA"
  | "AGUARDANDO_RESPOSTA"
  | "AGUARDANDO_PAGAMENTO";

export type LeadSource =
  | "VISITA"
  | "TELEFONE"
  | "WHATSAPP"
  | "INSTAGRAM";

export interface LeadProps {
  name: string;
  phone: string;
  source: LeadSource;
  vehicle: string;

  status: LeadStatus;
  stage: LeadStage;

  createdAt: Date;
  updatedAt?: Date;
}

export class Lead {
  public readonly id: string;
  public props: LeadProps;

  constructor(props: LeadProps, id?: string) {
    this.id = id ?? crypto.randomUUID();
    this.props = props;
  }
}
