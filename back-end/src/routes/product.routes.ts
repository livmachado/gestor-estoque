import { Router } from "express";
import { ProductController } from "../controllers/product.controller";

const router = Router(); 

router.post("/", ProductController.create); //Criar Produto
router.get("/", ProductController.list); //Listar todos os produtos
router.get("/:id", ProductController.detail); //Ver detalhes de um produto obs:não encontro o erro 
router.put("/:id", ProductController.update); //Atualizar produto
router.delete("/:id", ProductController.remove); //Deletar Produto

export default router;