import { Request, Response } from "express";
import { ListLeadsUseCase } from "./LisLead_UseCase";

export class ListLeadsController {
  constructor(private listLeadsUseCase: ListLeadsUseCase) {}

  async handle(req: Request, res: Response) {
    try {
      const leads = await this.listLeadsUseCase.execute();

      return res.json(leads);
    } catch (error: any) {
      return res.status(400).json({
        message: error.message,
      });
    }
  }
}