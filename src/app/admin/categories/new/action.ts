"use server";

import { executeAction, type OperationResult } from "@/drizzle/utils/executeAction";
import fs from "fs/promises";
import db from "@/drizzle";
import { category } from "@/drizzle/schema";
import { revalidatePath } from "next/cache";
import { categoryFormSchema } from "../_components/category-form.types";

export const addCategory = async (formState: OperationResult | undefined, formData: FormData) => {
    return executeAction({
        actionFn: async () => {
            debugger;
            const validatedData = Object.fromEntries(formData);
            const { success, data } = categoryFormSchema.safeParse(validatedData);
            if (success) {
                await fs.mkdir("public/images/categories", { recursive: true });
                const imagePath = `/images/categories/${crypto.randomUUID()}-${data.thumbnail?.name}`;
                await fs.writeFile(`public${imagePath}`, Buffer.from(await data.thumbnail!.arrayBuffer()));

                await db.insert(category).values({
                    nameFa: data.name,
                    nameEn: data.path,
                    parentId: Number(data.parentId),
                    thumbnail: imagePath,
                });
                revalidatePath("/admin/categories");
                revalidatePath("/");
                revalidatePath("/categories");
            }
            console.log(success);
        },
        isProtected: false,
        clientSuccessMessage: `دسته بندی  با موفقیت اضافه شد`,
        serverErrorMessage: "error in create product",
    });
};
