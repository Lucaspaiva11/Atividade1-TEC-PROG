import { leadRepository } from "../../repositories/implementations/LeadRepository";
import { CreateLeadUseCase } from "./CreateLead_UseCase";
import { CreateLeadController } from "./CreatLead_Controller";

const createLeadUseCase = new CreateLeadUseCase(leadRepository);
const createLeadController = new CreateLeadController(createLeadUseCase);

export { createLeadController };