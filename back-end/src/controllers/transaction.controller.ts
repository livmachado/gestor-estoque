import { Request, Response } from "express";
import { TransactionService } from "../services/transaction.service";

export const TransactionController = {
  create: async (req: Request, res: Response) => {
    try {
      const transaction = await TransactionService.create(req.body);
      res.status(201).json(transaction);
    } catch (error: any) {
      res.status(400).json({ error: error.message });
    }
  },

  listAll: async (_: Request, res: Response) => {
    const transactions = await TransactionService.listAll();
    res.json(transactions);
  },

  listByProduct: async (req: Request, res: Response) => {
    const productId = Number(req.params.productId);
    const transactions = await TransactionService.listByProduct(productId);
    res.json(transactions);
  },
};
