import { relations, type InferSelectModel } from "drizzle-orm";
import { integer, pgTable, serial, timestamp, varchar, type AnyPgColumn } from "drizzle-orm/pg-core";
import { z } from "zod";

import { product } from "@/drizzle/schema";

export const category = pgTable("category", {
    id: serial("id").primaryKey(),
    nameFa: varchar("name", { length: 255 }).notNull().unique(),
    thumbnail: varchar("thumbnail", { length: 255 }).notNull(),
    nameEn: varchar("link", { length: 255 }).notNull(),
    parentId: integer("parent_id").references((): AnyPgColumn => category.id),
    createdAt: timestamp("created_at", { mode: "string" }).notNull().defaultNow(),
    updatedAt: timestamp("updated_at", { mode: "string" }).notNull().defaultNow(),
});

export const categoryRelations = relations(category, ({ many }) => ({
    product: many(product),
}));

//schema

export const categorySchema = z.object({
    id: z.number().min(1),
    nameFa: z.string().min(1),
    thumbnail: z.string().min(1),
    nameEn: z.string().min(1),
    parentId: z.number().nullable(),
});

export type CategorySchema = z.infer<typeof categorySchema>;
export type SelectCategoryModel = InferSelectModel<typeof category>;
