"use server";

import db from "@/drizzle";
import { favorites } from "@/drizzle/schema";
import { executeAction } from "@/drizzle/utils/executeAction";
import { and, eq } from "drizzle-orm";
import { revalidatePath } from "next/cache";

export const addToFavorite = async (productId: number) => {
    return executeAction({
        actionFn: async (userId?: number) => {
            if (userId) {
                await db.insert(favorites).values({ productId: productId, userId: userId });
                revalidatePath("/shop");
            }
        },
        isProtected: true,
        clientSuccessMessage: "به علاقه مندی ها اضافه شد",
        serverErrorMessage: "error in update favorites",
    });
};

export const removeFromFavorite = async (productId: number) => {
    return executeAction({
        actionFn: async (userId?: number) => {
            if (userId) {
                await db.delete(favorites).where(and(eq(favorites.productId, productId), eq(favorites.userId, userId)));
                revalidatePath("/shop");
            }
        },
        isProtected: true,
        clientSuccessMessage: "از علاقه مندی ها حذف شد",
        serverErrorMessage: "error in update favorites",
    });
};
