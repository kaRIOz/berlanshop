import { and, eq } from "drizzle-orm";

import { address } from "@/drizzle/schema";
import db from "@/drizzle";
import { executeQuery } from "@/drizzle/utils/executeQuery";

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
