"use server";

import db from "@/drizzle";
import { category } from "@/drizzle/schema";
import { executeAction } from "@/drizzle/utils/executeAction";
import { eq } from "drizzle-orm";
import fs from "fs/promises";
import { revalidatePath } from "next/cache";

export const deleteCategory = async (id: number) => {
    return executeAction({
        actionFn: async () => {
            const thisProduct = await db.query.category.findFirst({
                columns: {
                    thumbnail: true,
                },
                where: eq(category.id, id),
            });

            await fs.unlink(`public/test.png`);
            await db.delete(category).where(eq(category.id, id));

            revalidatePath("/admin/categories");
            revalidatePath("/");
            revalidatePath("/categories");
        },
        isProtected: false,
        clientSuccessMessage: "دسته بندی با موفقیت حذف شد",
        serverErrorMessage: "خطا در حذف دسته بندی",
    });
};
