"use server";

import db from "@/drizzle";
import { executeQuery } from "@/drizzle/utils/executeQuery";
// import { unstable_cache } from "next/cache";

export async function getProducts() {
    return executeQuery({
        queryFn: async () => {
            return await db.query.product.findMany({
                columns: {
                    id: true,
                    name: true,
                    price: true,
                    description: true,
                    SKU: true,
                    thumbnail: true,
                    images: true,
                    categoryId: true,
                },
            });
        },
        serverErrorMessage: "getCategories",
        isProtected: false,
    });
}
