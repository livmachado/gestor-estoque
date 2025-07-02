import { Request, Response } from 'express';
import { ProductService } from '../services/product.service';

export const ProductController = {
  create: async (req: Request, res: Response) => {
    try {
        const product = await ProductService.create(req.body);
        res.status(201).json(product);
    } catch (error) {
        res.status(400).json({ error: 'Erro ao criar produto', details: error });
    }
  },

  list: async (_: Request, res: Response) => {
    const products = await ProductService.findAll();
    res.json(products);
  },

  detail: async (req: Request, res: Response) => {
    const id = Number(req.params.id);
    console.log("Buscando produto com ID:", id); 
    const product = await ProductService.findById(id);
    if (!product) return res.status(404).json({ error: 'Produto não encontrado' });
    res.json(product);
  },

  update: async (req: Request, res: Response) => {
    const id = Number(req.params.id);
    try {
      const updated = await ProductService.update(id, req.body);
      res.json(updated);
    } catch {
        res.status(404).json({ error: 'Erro ao atualizar produto' });       
    }
  },

    remove: async (req: Request, res: Response) => {
    const id = Number(req.params.id);
    try {
        await ProductService.delete(id);
        res.status(204).send();
    } catch {
        res.status(404).json({ error: 'Erro ao remover produto' });
    }
 }
};