import config from "$/drizzle.config";
import env from "@/configs/env";
import { drizzle } from "drizzle-orm/node-postgres";
import { migrate } from "drizzle-orm/node-postgres/migrator";
import { Pool } from "pg";

const pool = new Pool({
    connectionString: env.DATABASE_URL,
});

const db = drizzle(pool);

async function main() {
    if (config.out) {
        await migrate(db, { migrationsFolder: config.out });
        console.info("Migration done!");
    }
}

main()
    .catch(e => {
        console.error(e);
    })
    .finally(async () => {
        await pool.end();
    });
