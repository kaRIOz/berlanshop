import db from "@/drizzle";
import { category } from "@/drizzle/schema";
import { executeQuery } from "@/drizzle/utils/executeQuery";
import { eq } from "drizzle-orm";

export const getCategoriesById = (id: string) => {
    return executeQuery({
        queryFn: async () =>
            await db.query.category.findFirst({
                columns: {
                    id: true,
                    nameFa: true,
                    nameEn: true,
                    parentId: true,
                    thumbnail: true,
                },
                where: eq(category.id, +id),
            }),
        serverErrorMessage: "getCategoriesById",
        isProtected: false,
    });
};
