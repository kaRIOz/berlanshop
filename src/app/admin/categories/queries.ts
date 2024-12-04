"use server";

import db from "@/drizzle";
import { executeQuery } from "@/drizzle/utils/executeQuery";
// import { unstable_cache } from "next/cache";

export async function getCategories() {
    return executeQuery({
        queryFn: async () => {
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
        isProtected: false,
    });
}
