import { eq } from "drizzle-orm";

import { db } from "@/drizzle";
import { user } from "@/drizzle/schema";
import { executeQuery } from "@/drizzle/utils/executeQuery";
import { unstable_cache } from "next/cache";

export async function getCategories() {
    return executeQuery({
        queryFn: unstable_cache(
            async () => {
                return await db.query.category.findMany();
            },
            ["getCategories"],
            { revalidate: 10 },
        ),
        serverErrorMessage: "getCategories",
        isProtected: false,
    });
}

export async function getUser(userId: number) {
    return executeQuery({
        queryFn: async () =>
            await db.query.user.findFirst({
                columns: { fullName: true, email: true, id: true },
                where: eq(user.id, userId),
            }),
        serverErrorMessage: "getUser",
        isProtected: false,
    });
}
