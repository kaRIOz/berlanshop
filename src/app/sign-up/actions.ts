"use server";

import { redirect } from "next/navigation";

import { db } from "@/drizzle";
import { user } from "@/drizzle/schema";
import { UserSchema, userSchema } from "@/drizzle/schema/user";
import { executeAction } from "@/drizzle/utils/executeAction";

export async function signUp(data: UserSchema) {
    return executeAction({
        actionFn: async () => {
            const validatedData = userSchema.parse(data);
            if (validatedData.mode === "signUp") {
                await db.insert(user).values(validatedData);
                redirect("/sign-in");
            }
        },
        isProtected: false,

        clientSuccessMessage: "Signed up successfully",
        serverErrorMessage: "signUp",
    });
}
