import { z } from "zod";

export const otpSignUpSchema = z.object({
    phoneNumber: z
        .string()
        .max(11, { message: "شماره تلفن صحیح نمی باشد" })
        .regex(/((0?9)|(\+?989))\d{9}/g, { message: "شماره تلفن صحیح نمی باشد" }),
});
export type OTPForm = z.infer<typeof otpSignUpSchema>;
