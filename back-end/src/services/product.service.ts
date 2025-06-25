import { prisma } from "../prisma/client";

export const ProductService = {
  create: async (data: {
    name: string;
    description: string;
    quantity: number;
    price: number;
  }) => {
    return prisma.product.create({ data });
  },

  findAll: async () => {
    return prisma.product.findMany();
  },

  findById: async (id: number) => {
    return prisma.product.findUnique({ where: { id } });
  },

  update: async (
    id: number,
    data: {
      name?: string;
      description?: string;
      quantity?: number;
      price?: number;
    }
  ) => {
    return prisma.product.update({ where: { id }, data });
  },

  delete: async (id: number) => {
    return prisma.product.delete({ where: { id } });
  },
};
