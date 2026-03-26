import { leadRepository } from "../../repositories/implementations/LeadRepository";
import { ListLeadsUseCase } from "./LisLead_UseCase";
import { ListLeadsController } from "./ListLead_Controller";

const listLeadsUseCase = new ListLeadsUseCase(leadRepository);
const listLeadsController = new ListLeadsController(listLeadsUseCase);

export { listLeadsController };