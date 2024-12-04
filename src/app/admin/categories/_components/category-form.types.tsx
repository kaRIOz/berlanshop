import { z } from "zod";

const MAX_FILE_SIZE = 1024 * 1024 * 2;
const ACCEPTED_IMAGE_TYPES = ["image/jpeg", "image/png", "image/gif"];

export const categoryFormSchema = z.object({
    id: z.number().optional(),
    name: z.string().min(1),
    thumbnail: z
        .instanceof(File)
        .refine(file => file.size <= MAX_FILE_SIZE, `Image size must be less than ${MAX_FILE_SIZE / 1024 / 1024}MB.`)
        .refine(
            file => ACCEPTED_IMAGE_TYPES.includes(file.type),
            `Only the following image types are allowed: ${ACCEPTED_IMAGE_TYPES.join(", ")}.`,
        )
        .optional()
        .nullable(),
    path: z.string().min(1),
    parentId: z.string().min(1).default("0"),
});

export type CategoryFormType = z.infer<typeof categoryFormSchema>;
