import { Table, getTableName, sql } from "drizzle-orm";
import env from "@/configs/env";
import { db, connection, type DB } from "@/drizzle";
import * as schema from "@/drizzle/schema";
import * as seeds from "@/drizzle/seeds";

if (!env.DB_SEEDING) {
    throw new Error('You must set DB_SEEDING to "true" when running seeds');
}

async function resetTable(db: DB, table: Table) {
    return db.execute(sql.raw(`TRUNCATE TABLE ${getTableName(table)} RESTART IDENTITY CASCADE`));
}

async function main() {
    for (const table of [schema.category, schema.product]) {
        // eslint-disable-next-line drizzle/enforce-delete-with-where
        await db.delete(table); // clear tables without truncating / resetting ids
        await resetTable(db, table);
    }
    await seeds.category(db);

    await seeds.product(db);

    await connection.end();
}

main()
    .catch(e => {
        console.error(e);
        process.exit(1);
    })
    .finally(async () => {
        console.info("Seeding done!");
        process.exit(0);
    });
