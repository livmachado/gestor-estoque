import { prisma } from "../prisma/client";


export const ReportService= { 
    lowStock: async () => {
        return prisma.product.findMany({
            where: {
                quantity: {
                    lte: 5
                }
            },
            orderBy: {
                quantity: "asc"
            },
        });
    }
};