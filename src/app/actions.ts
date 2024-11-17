"use server";

import { executeAction } from "@/drizzle/utils/executeAction";
import { signOut as authSignOut } from "@/auth";

export async function signOut() {
    return executeAction({
        actionFn: async () => {
            await authSignOut();
        },
        isProtected: false,
        clientSuccessMessage: "Sign out successfully",
        serverErrorMessage: "signOut",
    });
}
