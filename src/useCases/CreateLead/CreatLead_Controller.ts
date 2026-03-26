import { Request, Response } from "express";
import { CreateLeadUseCase } from "./CreateLead_UseCase";

export class CreateLeadController {
  constructor(private createLeadUseCase: CreateLeadUseCase) {}

  async handle(req: Request, res: Response) {
    try {
      const dto = req.body;

      const lead = await this.createLeadUseCase.execute(dto);

      return res.status(201).json(lead);
    } catch (error: any) {
      return res.status(400).json({
        message: error.message,
      });
    }
  }
}