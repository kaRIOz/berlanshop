import db from "@/drizzle";
import { address } from "@/drizzle/schema";
import { executeAction } from "@/drizzle/utils/executeAction";
import { and, eq } from "drizzle-orm";
import { revalidatePath } from "next/cache";
export const removeFromFavorite = async (addressId: number) => {
    return executeAction({
        actionFn: async (userId?: number) => {
            if (userId) {
                // await db.delete(address).where(and(eq(address.addressId, addressId), eq(address.userId, userId)));
                revalidatePath("/shop");
            }
        },
        isProtected: true,
        clientSuccessMessage: "از علاقه مندی ها حذف شد",
        serverErrorMessage: "error in update favorites",
    });
};
