import { Request, Response } from "express";
import { ReportService } from "../services/report.service"

export const ReportController = {
    lowStock: async (_:Request, res: Response) => {
        const products = await ReportService.lowStock();
        res.json(products)
    }
};