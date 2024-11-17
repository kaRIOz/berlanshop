import { drizzle } from "drizzle-orm/postgres-js";
import postgres from "postgres";
import * as schema from "@/drizzle/schema";
import env from "@/configs/env";

export const connection = postgres(env.DATABASE_URL, {
    max: env.DB_MIGRATING || env.DB_SEEDING ? 1 : undefined,
    onnotice: env.DB_SEEDING ? () => {} : undefined,
});

export const db = drizzle(connection, {
    schema,
    logger: true,
});

export type DB = typeof db;

export default db;
