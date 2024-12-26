"use server";

import db from "@/drizzle";
import { category, product } from "@/drizzle/schema";
import { executeQuery } from "@/drizzle/utils/executeQuery";
import { count, eq } from "drizzle-orm";

export async function getCategories() {
    return executeQuery({
        queryFn: async (_, role) => {
            if (role !== "admin") {
                throw new Error("Not authorized");
            }
            return await db.query.category.findMany({
                columns: {
                    id: true,
                    nameFa: true,
                    nameEn: true,
                    parentId: true,
                    thumbnail: true,
                },
            });
        },

        serverErrorMessage: "getCategories",
        isProtected: true,
    });
}
export const getCategoriesWithProductsCount = async () => {
    return executeQuery({
        queryFn: async () => {
            return await db
                .select({
                    id: category.id,
                    nameFa: category.nameFa,
                    nameEn: category.nameEn,
                    parentId: category.parentId,
                    thumbnail: category.thumbnail,
                    productCount: count(product.id),
                })
                .from(category)
                .leftJoin(product, eq(product.categoryId, category.id))
                .groupBy(category.id);
        },

        serverErrorMessage: "getCategoriesWithProductsCount",
        isProtected: false,
    });
};
