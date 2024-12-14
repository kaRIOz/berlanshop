import { auth } from "@/auth";
import db from "@/drizzle";
import { category, favorites, product, user } from "@/drizzle/schema";
import { executeQuery } from "@/drizzle/utils/executeQuery";
import { and, count, eq, exists, sql } from "drizzle-orm";

export async function getUserProducts() {
    return executeQuery({
        queryFn: async (userId?: number) => {
            if (userId) {
                const subquery = db
                    .select()
                    .from(favorites)
                    .where(and(eq(favorites.userId, userId), eq(favorites.productId, product.id)));

                return await db
                    .select({
                        id: product.id,
                        name: product.name,
                        thumbnail: product.thumbnail,
                        description: product.description,
                        price: product.price,
                        isFavorite: exists(subquery),
                    })
                    .from(product);
            }
        },
        serverErrorMessage: "getUserProducts",
        isProtected: true,
    });
}
