import { z } from "zod";

export const OTPVerifySchema = z.object({
    phoneNumber: z.string(),
    verificationCode: z.string().min(6, { message: "کد باید ۶ رقم باشد" }),
});

export type OTPVerifyType = z.infer<typeof OTPVerifySchema>;
