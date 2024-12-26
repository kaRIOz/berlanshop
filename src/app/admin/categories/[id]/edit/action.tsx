"use server";
import { category } from "@/drizzle/schema";
import db from "@/drizzle";
import { executeAction, type OperationResult } from "@/drizzle/utils/executeAction";
import { eq } from "drizzle-orm";
import fs from "fs/promises";
import { revalidatePath } from "next/cache";
import { categoryFormSchema } from "./../../_components/category-form.types";

export const updateCategory = async (id: number, formState: OperationResult | undefined, formData: FormData) => {
    return executeAction({
        actionFn: async (_, role) => {
            if (role !== "admin") {
                throw new Error("Not authorized");
            }
            const validatedData = Object.fromEntries(formData);
            const { success, data } = categoryFormSchema.safeParse(validatedData);
            if (success) {
                const thisProduct = await db.query.category.findFirst({
                    columns: {
                        thumbnail: true,
                    },
                    where: eq(category.id, +id),
                });
                let imagePath = thisProduct?.thumbnail;
                if (data.thumbnail instanceof File && data.thumbnail?.size > 0) {
                    await fs.unlink(`public${thisProduct?.thumbnail}`);
                    imagePath = `/images/products/${crypto.randomUUID()}-${data.thumbnail?.name}`;
                    await fs.writeFile(`public${imagePath}`, Buffer.from(await data.thumbnail!.arrayBuffer()));
                }

                await db
                    .update(category)
                    .set({
                        nameFa: data.name,
                        nameEn: data.path,
                        thumbnail: imagePath,
                        parentId: Number(data.parentId) === 0 ? null : Number(data.parentId),
                    })
                    .where(eq(category.id, +id));
            }

            revalidatePath("/admin/categories");
        },
        isProtected: true,
        clientSuccessMessage: `دسته بندی با موفقیت ویرایش شد`,
        serverErrorMessage: "error in create category",
    });
};
