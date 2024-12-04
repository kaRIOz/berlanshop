"use server";
import { product } from "@/drizzle/schema";
import db from "@/drizzle";
import { executeAction, type OperationResult } from "@/drizzle/utils/executeAction";
import { eq } from "drizzle-orm";
import fs from "fs/promises";
import { revalidatePath } from "next/cache";
import { productFormSchema } from "../../_components/product-form.types";

export const updateProduct = async (id: number, formState: OperationResult | undefined, formData: FormData) => {
    return executeAction({
        actionFn: async () => {
            const validatedData = Object.fromEntries(formData);
            const { success, data } = productFormSchema.safeParse(validatedData);

            if (success) {
                const thisProduct = await db.query.product.findFirst({
                    columns: {
                        thumbnail: true,
                    },
                    where: eq(product.id, +id),
                });
                let imagePath = thisProduct?.thumbnail;
                if (data.thumbnail != null && data.thumbnail.size > 0) {
                    await fs.unlink(`public${thisProduct?.thumbnail}`);
                    imagePath = `/images/products/${crypto.randomUUID()}-${data.thumbnail?.name}`;
                    await fs.writeFile(`public${imagePath}`, Buffer.from(await data.thumbnail!.arrayBuffer()));
                }

                await db
                    .update(product)
                    .set({
                        name: data.name,
                        price: data.price,
                        description: data.description,
                        SKU: data.SKU,
                        thumbnail: imagePath,
                        categoryId: Number(data.categoryId),
                    })
                    .where(eq(product.id, +id));
            }

            revalidatePath("/admin/products");
        },
        isProtected: false,
        clientSuccessMessage: `محصول با موفقیت اضافه شد`,
        serverErrorMessage: "error in create product",
    });
};
