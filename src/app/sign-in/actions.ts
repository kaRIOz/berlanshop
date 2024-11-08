"use server";

import { UserSchema, userSchema } from "@/drizzle/schema/user";
import { executeAction } from "@/drizzle/utils/executeAction";
import { signIn as authSignIn } from "@/lib/auth";

export async function signIn(data: UserSchema) {
    return executeAction({
        actionFn: async () => {
            const validatedData = userSchema.parse(data);
            await authSignIn("credentials", { ...validatedData, redirectTo: "/" });
        },
        isProtected: false,
        clientSuccessMessage: "Signed in successfully",
        serverErrorMessage: "signIn",
    });
}
