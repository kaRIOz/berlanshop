import db from "@/drizzle";
import { address } from "@/drizzle/schema";
import { executeQuery } from "@/drizzle/utils/executeQuery";
import { and, eq } from "drizzle-orm";
import { unstable_cache } from "next/cache";

export const getUserAddressList = async () => {
    return executeQuery({
        queryFn: async (userId?: number) => {
            if (userId) {
                return await db
                    .select({
                        id: address.id,
                        fullAddress: address.fullAddress,
                        province: address.province,
                        city: address.city,
                        postalCode: address.postalCode,
                    })
                    .from(address)
                    .where(eq(address.userId, userId));
            }
        },
        serverErrorMessage: "getUserFavorites",
        isProtected: true,
    });
};
