"use server";

import db from "@/drizzle";
import { product } from "@/drizzle/schema";
import { executeAction } from "@/drizzle/utils/executeAction";
import { eq } from "drizzle-orm";
import fs from "fs/promises";
import { revalidatePath } from "next/cache";

export const deleteProduct = async (id: number) => {
    return executeAction({
        actionFn: async () => {
            const thisProduct = await db.query.product.findFirst({
                columns: {
                    thumbnail: true,
                },
                where: eq(product.id, id),
            });

            await fs.unlink(`public${thisProduct?.thumbnail}`);
            await db.delete(product).where(eq(product.id, id));

            revalidatePath("/admin/products");
            revalidatePath("/");
            revalidatePath("/products");
        },
        isProtected: false,
        clientSuccessMessage: "محصوب با موفقیت حذف شد",
        serverErrorMessage: "خطا در حذف محصول",
    });
};
