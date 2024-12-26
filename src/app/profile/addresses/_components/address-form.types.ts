import { z } from "zod";

export const userAddressFormSchema = z.object({
    province: z.string().min(1),
    city: z.string().min(1),
    fullAddress: z.string().min(1, { message: "آدرس را وارد کنید" }),
    postalCode: z
        .string()
        .min(10, { message: "کد پستی خود را وارد کنید" })
        .max(10)
        .regex(/\b(?!(\d)\1{3})[13-9]{4}[1346-9][013-9]{5}\b/g, { message: "کد پستی شما نادرست می‌باشد" }),
});

export type AddressFormType = z.infer<typeof userAddressFormSchema>;
