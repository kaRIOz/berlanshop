"use server";

import db from "@/drizzle";
import { product, productSchema, type ProductSchema } from "@/drizzle/schema/product/product";
import { executeAction } from "@/drizzle/utils/executeAction";
import { eq } from "drizzle-orm";
import { revalidatePath } from "next/cache";

export const editProduct = async (data: ProductSchema) => {
    return executeAction({
        actionFn: async () => {
            const validatedData = productSchema.parse(data);

            if (validatedData.mode === "edit") {
                await db.update(product).set(validatedData).where(eq(product.id, +validatedData.id));
            }

            revalidatePath("/admin/products");
        },
        isProtected: false,
        clientSuccessMessage: `محصول با موفقیت اضافه شد`,
        serverErrorMessage: "error in create product",
    });
};
