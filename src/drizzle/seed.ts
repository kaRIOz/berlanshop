import { sql, Table } from "drizzle-orm";

import { db, DB } from "@/drizzle";
import * as schema from "@/drizzle/schema";
import * as seeds from "@/drizzle/seeds";

async function resetTable(db: DB, table: Table) {
    return db.execute(sql`truncate table ${table} restart identity cascade`);
}

async function main() {
    for (const table of [schema.category, schema.user, schema.tag, schema.post, schema.postTags, schema.comment]) {
        await resetTable(db, table);
    }
    await seeds.category(db);
    await seeds.user(db);
    await seeds.tag(db);
    await seeds.post(db);
    await seeds.postTags(db);
    await seeds.comment(db);
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
