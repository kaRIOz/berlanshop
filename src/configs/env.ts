import { config } from "dotenv";
import { expand } from "dotenv-expand";
import { z, ZodError } from "zod";

const stringBoolean = z.coerce
    .string()
    .transform(val => {
        return val === "true";
    })
    .default("false");

const envSchema = z.object({
    DB_HOST: z.string().min(1),
    DB_USER: z.string().min(1),
    DB_PASSWORD: z.string().min(1),
    DB_NAME: z.string().min(1),
    DB_PORT: z.coerce.number().min(1),
    DATABASE_URL: z.string().min(1),
    AUTH_SECRET: z.string().min(1),
    AUTH_TRUST_HOST: z.string().min(1),
    NEXT_PUBLIC_SERVER_URL: z.string().min(1),
    DB_MIGRATING: stringBoolean,
    DB_SEEDING: stringBoolean,
    NEXT_DEFAULT_PRODUCT_IMAGE: z.string().min(1),
    NEXT_DEFAULT_CATEGORY_IMAGE: z.string().min(1),
    NEXT_DEFAULT_USER_IMAGE: z.string().min(1),
    NEXT_DEFAULT_ADMIN_IMAGE: z.string().min(1),
});

expand(config());

export type EnvSchema = z.infer<typeof envSchema>;

try {
    envSchema.parse(process.env);
} catch (error) {
    if (error instanceof ZodError) {
        let message = "Missing required values in .env:\n";
        error.issues.forEach(issue => {
            message += issue.path[0] + "\n";
        });
        const e = new Error(message);
        e.stack = "";
        throw e;
    } else {
        console.error(error);
    }
}

export default envSchema.parse(process.env);
