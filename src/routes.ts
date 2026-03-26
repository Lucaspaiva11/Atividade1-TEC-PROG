import { Router } from "express";
import { createLeadController } from "./useCases/CreateLead";
import { listLeadsController } from "./useCases/ListLead";
import { evolveLeadController } from "./useCases/EvolveLead";

const leadRoutes = Router();

leadRoutes.post("/create", (req, res) =>
  createLeadController.handle(req, res)
);

leadRoutes.get("/leads", (req, res) =>
  listLeadsController.handle(req, res)
);

// CORREÇÃO 1: Usando o nome correto da variável (leadRoutes)
// CORREÇÃO 2: Declarando a rota antes do export
leadRoutes.patch("/leads/:id/evolve", (req, res) => 
  evolveLeadController.handle(req, res)
);

export { leadRoutes };