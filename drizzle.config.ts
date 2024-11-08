import env from "@/configs/env";
import { defineConfig } from "drizzle-kit";

export default defineConfig({
    schema: "./src/drizzle/schema/index.ts",
    out: "./src/drizzle/migrations",
    dialect: "postgresql",
    dbCredentials: {
        url: env.DATABASE_URL,
    },
    verbose: true,
    strict: true,
});
