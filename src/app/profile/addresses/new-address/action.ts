"use server";

import { executeAction, type OperationResult } from "@/drizzle/utils/executeAction";
import fs from "fs/promises";
import db from "@/drizzle";
import { address } from "@/drizzle/schema";
import { revalidatePath } from "next/cache";
import { addressSchema } from "@/drizzle/schema/user/address";

export const addAddress = async (formState: OperationResult | undefined, formData: FormData) => {
    return executeAction({
        actionFn: async (id?: number) => {
            const validatedData = Object.fromEntries(formData);
            const { success, data } = addressSchema.safeParse(validatedData);
            if (success) {
                await db.insert(address).values({
                    city: data.city,
                    fullAddress: data.fullAddress,
                    postalCode: data.postalCode,
                    userId: Number(id),
                    province: data.province,
                });

                revalidatePath("/profile/addresses");
            }
        },
        isProtected: false,
        clientSuccessMessage: `آدرس با موفقیت اضافه شد`,
        serverErrorMessage: "error in create address",
    });
};
