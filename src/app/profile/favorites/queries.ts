import { auth } from "@/auth";
import db from "@/drizzle";
import { category, favorites, product, user } from "@/drizzle/schema";
import { executeQuery } from "@/drizzle/utils/executeQuery";
import { wait } from "@/lib/utils";
import { and, count, eq, exists, sql } from "drizzle-orm";

export async function getUserFavorites() {
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
