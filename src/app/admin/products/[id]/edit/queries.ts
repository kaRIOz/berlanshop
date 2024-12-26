import db from "@/drizzle";
import { product } from "@/drizzle/schema";
import { executeQuery } from "@/drizzle/utils/executeQuery";
import { eq } from "drizzle-orm";

export const getProductsById = (id: string) => {
    return executeQuery({
        queryFn: async (_, role) =>
            role === "admin" &&
            (await db.query.product.findFirst({
                columns: {
                    id: true,
                    name: true,
                    description: true,
                    price: true,
                    SKU: true,
                    thumbnail: true,
                },
                with: {
                    category: {
                        columns: {
                            id: true,
                            nameFa: true,
                        },
                    },
                },
                where: eq(product.id, +id),
            })),
        serverErrorMessage: "getProductsById",
        isProtected: true,
    });
};
