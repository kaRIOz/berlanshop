"use server";
import db from "@/drizzle";
import { address } from "@/drizzle/schema";
import { addressSchema } from "@/drizzle/schema/user/address";
import { executeAction, type OperationResult } from "@/drizzle/utils/executeAction";
import { eq } from "drizzle-orm";
import { revalidatePath } from "next/cache";
export const updateAddress = async (formState: OperationResult | undefined, formData: FormData) => {
    return executeAction({
        actionFn: async (id?: number) => {
            const validatedData = Object.fromEntries(formData);
            const { success, data } = addressSchema.safeParse(validatedData);
            const addressId = Number(formData.get("id"));

            if (success && addressId) {
                await db
                    .update(address)
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
export const deleteAddress = async (formState: OperationResult | undefined, addressId: number) => {
    return executeAction({
        actionFn: async (id?: number) => {
            if (addressId) {
                await db.delete(address).where(eq(address.id, addressId));

                revalidatePath("/profile/addresses");
            }
        },
        isProtected: true,
        clientSuccessMessage: `آدرس با موفقیت حذف شد`,
        serverErrorMessage: "error in delete address",
    });
};
