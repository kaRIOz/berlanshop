import { eq } from "drizzle-orm";

import { auth } from "@/lib/auth";
import { executeQuery } from "@/drizzle/utils/executeQuery";
import { user } from "@/drizzle/schema";
import { db } from "@/drizzle";

export async function getCurrentUser() {
    const session = await auth();

    const sessionUserId = session?.user?.id;

    if (!sessionUserId) return null;

    return executeQuery({
        queryFn: async () => await db.query.user.findFirst({ where: eq(user.id, +sessionUserId) }),
        serverErrorMessage: "getCurrentUser",
        isProtected: false,
    });
}
