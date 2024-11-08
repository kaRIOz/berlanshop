"use server";

import { executeAction } from "@/drizzle/utils/executeAction";
import { signOut as authSignOut } from "@/lib/auth";

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
