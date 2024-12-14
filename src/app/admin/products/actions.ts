"use server";

import env from "@/configs/env";
import db from "@/drizzle";
import { product } from "@/drizzle/schema";
import { executeAction, type OperationResult } from "@/drizzle/utils/executeAction";
import { eq } from "drizzle-orm";
import fs from "fs/promises";
import { revalidatePath } from "next/cache";

export const deleteProduct = async (state: OperationResult | undefined, id: number) => {
    return executeAction({
        actionFn: async () => {
            const thisProduct = await db.query.product.findFirst({
                columns: {
                    thumbnail: true,
                },
                where: eq(product.id, +id),
            });
            debugger;
            if (thisProduct?.thumbnail !== env.NEXT_DEFAULT_PRODUCT_IMAGE) {
                await fs.unlink(`public${thisProduct?.thumbnail}`);
            }
            await db.delete(product).where(eq(product.id, +id));
            revalidatePath("/admin/products");
            revalidatePath("/");
            revalidatePath("/products");
        },
        isProtected: false,
        clientSuccessMessage: "محصول با موفقیت حذف شد",
        serverErrorMessage: "خطا در حذف محصول",
    });
};
