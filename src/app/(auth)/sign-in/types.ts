import { z } from "zod";

export const singInSchema = z.object({
    username: z
        .string()
        .min(1, {
            message: "ایمیل الزامی است",
        })
        .email({
            message: "ایمیل معتبر نیست",
        }),
    password: z
        .string()
        .min(1, {
            message: "رمز عبور الزامی است",
        })
        .min(8, {
            message: "رمز حداقل باید 8 کارکتر باشد",
        })
        .regex(/^(?=.*[a-zA-Z]).{1,}$/, {
            message: "حداقل شامل یک حرف باشد",
        })
        .regex(/^(?=.*\d).{1,}$/, {
            message: "حداقل شامل یک رقم باشد",
        })
        // eslint-disable-next-line no-useless-escape
        .regex(/^(?=.*[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>/?]).{1,}$/, {
            message: "حداقل شامل یک کارکتر باشد",
        }),
});

export type SignInForm = z.infer<typeof singInSchema>;
