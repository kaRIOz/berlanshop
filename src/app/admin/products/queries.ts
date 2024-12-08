"use server";

import db from "@/drizzle";
import { category } from "@/drizzle/schema";
import { executeQuery } from "@/drizzle/utils/executeQuery";
import { sql } from "drizzle-orm";

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
                },
                with: {
                    category: {
                        columns: {
                            nameFa: true,
                        },
                        // extras: {
                        //     parentCategory:
                        //         sql<string>`select ${category.nameFa} from ${category} where ${category.id} = ${category.parentId}`.as(
                        //             "parent_category",
                        //         ),
                        // },
                    },
                },
            });
        },
        serverErrorMessage: "getProducts",
        isProtected: false,
    });
}
