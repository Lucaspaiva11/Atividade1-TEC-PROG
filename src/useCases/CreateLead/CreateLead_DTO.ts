export interface CreateLeadDTO {
  name: string;
  phone: string;
  source: "VISITA" | "TELEFONE" | "WHATSAPP" | "INSTAGRAM";
  vehicle: string;
}