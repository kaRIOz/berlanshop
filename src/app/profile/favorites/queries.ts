"use server";

import { auth } from "@/auth";
import db from "@/drizzle";
import { favorites, product } from "@/drizzle/schema";
import { executeQuery } from "@/drizzle/utils/executeQuery";
import { and, eq, exists } from "drizzle-orm";

export async function getUserFavorites() {
    return executeQuery({
        queryFn: async (userId?: number) => {
            if (userId) {
                await db
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
                // await db.query.product.findMany({
                //     columns: {
                //         id: true,
                //         name: true,
                //         thumbnail: true,
                //         description: true,
                //         price: true,
                //     },
                //     where: and(eq(favorites.userId, userId), eq(favorites.productId, product.id)),
                // });
            }
        },
        serverErrorMessage: "getUserFavorites",
        isProtected: true,
    });
}
