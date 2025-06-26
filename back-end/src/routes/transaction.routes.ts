import { Router } from "express";
import { TransactionController } from "../controllers/transaction.controller";

const router = Router(); 

router.post("/", TransactionController.create); //Registro de saidas e entradas
router.get("/", TransactionController.listAll); //Listar todas as movimentacoes
router.get("/:productId", TransactionController.listByProduct); //Visualizar movimentacoes de um produto especifico

export default router;