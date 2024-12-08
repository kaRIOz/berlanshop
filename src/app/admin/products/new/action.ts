"use server";

import { executeAction, type OperationResult } from "@/drizzle/utils/executeAction";
import { productFormSchema } from "../_components/product-form.types";
import fs from "fs/promises";
import db from "@/drizzle";
import { product } from "@/drizzle/schema";
import { revalidatePath } from "next/cache";

export const addProduct = async (formState: OperationResult | undefined, formData: FormData) => {
    return executeAction({
        actionFn: async () => {
            const validatedData = Object.fromEntries(formData);
            const { success, data } = productFormSchema.safeParse(validatedData);
            if (success) {
                let imagePath = "";
                if (data.thumbnail instanceof File && data.thumbnail?.size > 0) {
                    await fs.mkdir("public/images/products", { recursive: true });
                    imagePath = `/images/products/${crypto.randomUUID()}-${data.thumbnail?.name}`;
                    await fs.writeFile(`public${imagePath}`, Buffer.from(await data.thumbnail!.arrayBuffer()));
                }
                await db.insert(product).values({
                    name: data.name,
                    price: data.price,
                    description: data.description,
                    SKU: data.SKU,
                    thumbnail: !!imagePath ? imagePath : null,
                    categoryId: Number(data.categoryId) === 0 ? null : Number(data.categoryId),
                });
                revalidatePath("/admin/products");
                revalidatePath("/");
                revalidatePath("/products");
            }
        },
        isProtected: false,
        clientSuccessMessage: `محصول با موفقیت اضافه شد`,
        serverErrorMessage: "error in create product",
    });
};
