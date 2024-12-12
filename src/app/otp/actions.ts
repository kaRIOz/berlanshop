"use server";

import db from "@/drizzle";
import { executeAction } from "@/drizzle/utils/executeAction";
import { eq } from "drizzle-orm";
import { user } from "@/drizzle/schema/user/user";
import { generateOTP } from "@/drizzle/utils/generateOTP";
import { otpSignUpSchema, type OTPForm } from "./types";

type NewUser = typeof user.$inferInsert;

export async function checkPhoneNumber(formData: OTPForm) {
    const { success, error, data } = otpSignUpSchema.safeParse(formData);
    const code = generateOTP();
    return executeAction({
        actionFn: async () => {
            if (success) {
                const isUserExist = await db.query.user.findFirst({
                    where: eq(user.phoneNumber, data.phoneNumber),
                });
                if (!isUserExist) {
                    const newUser: NewUser = {
                        phoneNumber: data.phoneNumber,
                        verificationCode: code,
                    };
                    await db.insert(user).values(newUser);
                } else {
                    await db
                        .update(user)
                        .set({
                            verificationCode: code,
                        })
                        .where(eq(user.phoneNumber, data.phoneNumber));
                }
            }
        },
        isProtected: false,
        clientSuccessMessage: `${code}`,
        serverErrorMessage: `phoneNumber Error : ${error}`,
    });
}
