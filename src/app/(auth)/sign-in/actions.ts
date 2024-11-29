"use server";

import db from "@/drizzle";
import { admin } from "@/drizzle/schema/admin/admin";
import { executeQuery } from "@/drizzle/utils/executeQuery";
import { and, eq } from "drizzle-orm";
import { singInSchema } from "./types";
import { signIn } from "@/auth";
import { executeAction } from "@/drizzle/utils/executeAction";

export async function signInAction(formState: { success: boolean; message: string } | undefined, formData: FormData) {
    const validatedData = singInSchema.safeParse(Object.fromEntries(formData));
    if (validatedData.success) {
        const { username, password } = validatedData.data;
        return executeAction({
            actionFn: async () =>
                await signIn("credentials", {
                    username: username,
                    password: password,
                    redirect: false,
                }),
            isProtected: false,
            serverErrorMessage: "Error signing in",
            clientSuccessMessage: "Successfully signed in",
        });
    }
}

export async function signInByEmailAndPassword(data: unknown) {
    return executeQuery({
        queryFn: async () => {
            const validatedData = singInSchema.safeParse(data);

            if (validatedData.success) {
                return await db.query.admin.findFirst({
                    columns: {
                        id: true,
                        username: true,
                        password: true,
                    },
                    where: and(
                        // hash
                        eq(admin.username, validatedData.data.username),
                        eq(admin.password, String(validatedData.data.password)),
                    ),
                });
            }
        },
        isProtected: false,
        serverErrorMessage: "getUserByEmailAndPassword",
    });
}
