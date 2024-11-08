import { relations } from "drizzle-orm";
import { pgTable, serial, varchar } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod";

import { postTags } from "@/drizzle/schema";

export const tag = pgTable("tag", {
    id: serial("id").primaryKey(),
    name: varchar("name", { length: 255 }).notNull().unique(),
});

export const tagRelations = relations(tag, ({ many }) => ({
    postToTag: many(postTags),
}));

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const tagSchema = createInsertSchema(tag);
export type TagSchema = z.infer<typeof tagSchema>;
