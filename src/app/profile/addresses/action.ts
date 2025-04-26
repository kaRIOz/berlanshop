"user server";
import { executeAction, type OperationResult } from "@/drizzle/utils/executeAction";
import fs from "fs/promises";
import db from "@/drizzle";
import { address } from "@/drizzle/schema";
import { revalidatePath } from "next/cache";
import { addressSchema } from "@/drizzle/schema/user/address";
import { eq } from "drizzle-orm";
//TODO: add action for update and delete address
export const updateAddress = async (formState: OperationResult | undefined, formData: FormData) => {
    return executeAction({
        actionFn: async (id?: number) => {
            const validatedData = Object.fromEntries(formData);
            const { success, data } = addressSchema.safeParse(validatedData);
            const addressId = Number(formData.get("id"));

            if (success && addressId) {
                await db.update(address)
                    .set({
                        city: data.city,
                        fullAddress: data.fullAddress,
                        postalCode: data.postalCode,
                        province: data.province,
                    })
                    .where(
                        eq(address.id, addressId),
                        // eq(address.userId, Number(id))
                    );

                revalidatePath("/profile/addresses");
            }
        },
        isProtected: true,
        clientSuccessMessage: `آدرس با موفقیت ویرایش شد`,
        serverErrorMessage: "error in update address",
    });
};
    export const deleteAddress = async (formState: OperationResult | undefined, formData: FormData) => {
    return executeAction({
        actionFn: async (id?: number) => {
            const addressId = Number(formData.get("id"));

            if (addressId) {
                await db.delete(address)
                    .where(
                        eq(address.id, addressId),
                        // eq(address.userId, Number(id))
                    );

                revalidatePath("/profile/addresses");
            }
        },
        isProtected: true,
        clientSuccessMessage: `آدرس با موفقیت حذف شد`,
        serverErrorMessage: "error in delete address",
    });
};
