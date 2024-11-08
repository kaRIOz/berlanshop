import { and, eq } from "drizzle-orm";

import { db } from "@/drizzle";
import { user } from "@/drizzle/schema";
import { userSchema } from "@/drizzle/schema/user";
import { executeQuery } from "@/drizzle/utils/executeQuery";

export async function getUserByEmailAndPassword(data: unknown) {
    return executeQuery({
        queryFn: async () => {
            const validatedData = userSchema.parse(data);
            if (validatedData.mode === "signIn") {
                return (
                    await db
                        .select()
                        .from(user)
                        .where(and(eq(user.password, validatedData.password), eq(user.email, validatedData.email)))
                )[0];
            }
        },
        isProtected: false,
        serverErrorMessage: "getUserByEmailAndPassword",
    });
}
