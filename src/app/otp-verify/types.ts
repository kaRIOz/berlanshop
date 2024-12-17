import { z } from "zod";

export const OTPVerifySchema = z.object({
    phoneNumber: z.string(),
    verificationCode: z.string(),
});

export type OTPVerifyType = z.infer<typeof OTPVerifySchema>;
