"use server";

import db from "@/drizzle";
import { user } from "@/drizzle/schema/user/user";
import { executeQuery } from "@/drizzle/utils/executeQuery";
import { and, eq } from "drizzle-orm";
import { OTPVerifySchema } from "./types";
import { signIn } from "@/auth";
import { executeAction } from "@/drizzle/utils/executeAction";

export async function signInAction(formState: { success: boolean; message: string } | undefined, formData: FormData) {
    const validatedData = OTPVerifySchema.safeParse(Object.fromEntries(formData));
    if (validatedData.success) {
        const { phoneNumber, verificationCode } = validatedData.data;
        return executeAction({
            actionFn: async () =>
                await signIn("user", {
                    phoneNumber: phoneNumber,
                    verificationCode: verificationCode,
                    redirect: false,
                }),
            isProtected: false,
            serverErrorMessage: "Error signing in",
            clientSuccessMessage: "Successfully signed in",
        });
    }
}

export async function signInByPhoneNumber(data: unknown) {
    return executeQuery({
        queryFn: async () => {
            const validatedData = OTPVerifySchema.safeParse(data);
            if (validatedData.success) {
                return await db.query.user.findFirst({
                    columns: {
                        id: true,
                        firstName: true,
                        lastName: true,
                        phoneNumber: true,
                    },
                    where: and(
                        eq(user.phoneNumber, validatedData.data.phoneNumber),
                        eq(user.verificationCode, String(validatedData.data.verificationCode)),
                    ),
                });
            }
        },
        isProtected: false,
        serverErrorMessage: "getUserByEmailAndPassword",
    });
}
