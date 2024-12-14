import { auth } from "@/auth";
import db from "@/drizzle";
import { category, favorites, product, user } from "@/drizzle/schema";
import { executeQuery } from "@/drizzle/utils/executeQuery";
import { and, count, eq, exists, sql } from "drizzle-orm";

export async function getUserProducts() {
    const session = await auth();
    const userId = session?.user?.id ? Number(session.user.id) : undefined;

    return executeQuery({
        queryFn: async () => {
            if (!userId) return null;
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
        },
        serverErrorMessage: "getUserProducts",
        isProtected: true,
    });
}
