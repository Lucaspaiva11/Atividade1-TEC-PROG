import { Lead, LeadProps } from "../../entities/Lead";

interface CreateLeadFactoryDTO {
  name: string;
  phone: string;
  source: "VISITA" | "TELEFONE" | "WHATSAPP" | "INSTAGRAM";
  vehicle: string;
}

export class LeadFactory {
  static create(data: CreateLeadFactoryDTO): Lead {
    const props: LeadProps = {
      name: data.name,
      phone: data.phone,
      source: data.source,
      vehicle: data.vehicle,

      status: "ABERTO",
      stage: "CONTATO_INICIAL",

      createdAt: new Date(),
    };

    return new Lead(props);
  }
}