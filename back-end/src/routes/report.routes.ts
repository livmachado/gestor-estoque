import { Router } from "express";
import { ReportController } from "../controllers/report.controller";

const router= Router();

router.get("/", ReportController.lowStock)

export default router;