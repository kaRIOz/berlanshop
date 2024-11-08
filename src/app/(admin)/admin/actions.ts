"use server";

import { db } from "@/drizzle";
import { user, userSchema, type UserSchema } from "@/drizzle/schema/user";
import { executeAction } from "@/drizzle/utils/executeAction";
import { eq } from "drizzle-orm";
import { revalidatePath } from "next/cache";

export async function updateUser(data: UserSchema) {
    return executeAction({
        actionFn: async () => {
            const validatedData = userSchema.parse(data);
            if (validatedData.mode === "update") {
                await db.update(user).set(data).where(eq(user.id, +validatedData.id));
                revalidatePath("/admin");
            }
        },
        isProtected: true,
        clientSuccessMessage: "User updated successfully",
        serverErrorMessage: "updateUser",
    });
}
