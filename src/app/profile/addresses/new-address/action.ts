// "use server";

// import { executeAction, type OperationResult } from "@/drizzle/utils/executeAction";
// import fs from "fs/promises";
// import db from "@/drizzle";
// import { product } from "@/drizzle/schema";
// import { revalidatePath } from "next/cache";
// import env from "@/configs/env";

// export const addAddress = async (formState: OperationResult | undefined, formData: FormData) => {
//     return executeAction({
//         actionFn: async () => {
//             const validatedData = Object.fromEntries(formData);
//             const { success, data } = productFormSchema.safeParse(validatedData);
//             if (success) {
//                 await db.insert(product).values({});
//                 revalidatePath("/profile/addresses");
//             }
//         },
//         isProtected: false,
//         clientSuccessMessage: `آدرس با موفقیت اضافه شد`,
//         serverErrorMessage: "error in create address",
//     });
// };
