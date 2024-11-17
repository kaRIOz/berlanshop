import { relations } from "drizzle-orm";
import { integer, pgTable, serial, varchar, type AnyPgColumn } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod";

import { product } from "@/drizzle/schema";

export const category = pgTable("category", {
    id: serial("id").primaryKey(),
    name: varchar("name", { length: 255 }).notNull().unique(),
    thumbnail: varchar("thumbnail", { length: 255 }).notNull(),
    parentId: integer("parent_id").references((): AnyPgColumn => category.id),
});

export const categoryRelations = relations(category, ({ many }) => ({
    product: many(product),
}));

export const categorySchema = createInsertSchema(category);
export type CategorySchema = z.infer<typeof categorySchema>;
