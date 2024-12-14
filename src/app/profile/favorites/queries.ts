import { auth } from "@/auth";
import db from "@/drizzle";
import { category, favorites, product, user } from "@/drizzle/schema";
import { executeQuery } from "@/drizzle/utils/executeQuery";
import { and, count, eq, exists, sql } from "drizzle-orm";

export async function getUserFavorites() {
    return executeQuery({
        queryFn: async (userId?: number) => {
            if (userId) {
                return await db
                    .select({
                        id: product.id,
                        name: product.name,
                        thumbnail: product.thumbnail,
                        description: product.description,
                        price: product.price,
                    })
                    .from(product)
                    .leftJoin(favorites, eq(favorites.productId, product.id))
                    .where(eq(favorites.userId, userId))
                    .groupBy(product.id);
            }
        },
        serverErrorMessage: "getUserFavorites",
        isProtected: true,
    });
}
