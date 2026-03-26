import { Request, Response } from "express";
import { EvolveLeadUseCase } from "./EvolveLead_UseCase";

export class EvolveLeadController {
  constructor(private evolveLeadUseCase: EvolveLeadUseCase) {}

  async handle(req: Request, res: Response): Promise<Response> {
    const { id } = req.params;
    const { action } = req.body; // action deve vir no corpo da requisição

    try {
      await this.evolveLeadUseCase.execute({ id, action });
      return res.status(200).json({ message: "Lead atualizada com sucesso." });
    } catch (error: any) {
      return res.status(400).json({ error: error.message });
    }
  }
}