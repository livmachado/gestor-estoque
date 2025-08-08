import { prisma } from "../prisma/client";
import { TransactionType } from "@prisma/client";

export const TransactionService = {
  create: async (data: {
    productId: number;
    type: TransactionType; //IN ou OUT
    quantity: number;
    note?: string;
  }) => {
    const { productId, type, quantity, note } = data;

    const product = await prisma.product.findUnique({
      where: { id: productId },
    });
    if (!product) throw new Error("Produto não encontrado"); //cria exceção

    const newQuantity =
      type === "IN" ? product.quantity + quantity : product.quantity - quantity;

    if (newQuantity < 0) throw new Error("Não há produto suficiente"); //product zera? função onde caso o estoque esteja zerado só é possivel adicionar produto

    //Atualiza a quantidade do produto
    await prisma.product.update({
      where: { id: productId },
      data: { quantity: newQuantity },
    });

    //Cria movimentação
    return prisma.transaction.create({
      data: {
        productId,
        type,
        quantity,
        note,
      },
    });
  },

  listAll: async () => {
    return prisma.transaction.findMany({
      include: {
        product: true,
      },
      orderBy: { createdAt: "desc" },
    });
  },

  listByProduct: async (productId: number) => {
    return prisma.transaction.findMany({
      where: { productId },
      include: {
        product: true,
      },
      orderBy: { createdAt: "desc" },
    });
  },
};
