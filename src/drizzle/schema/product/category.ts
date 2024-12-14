import { relations, type InferSelectModel } from "drizzle-orm";
import { integer, pgTable, serial, timestamp, varchar, type AnyPgColumn } from "drizzle-orm/pg-core";
import { z } from "zod";

import { product } from "@/drizzle/schema";
import { createInsertSchema } from "drizzle-zod";
import env from "@/configs/env";

export const category = pgTable("category", {
    id: serial("id").primaryKey(),
    nameFa: varchar("name", { length: 255 }).notNull().unique(),
    thumbnail: varchar("thumbnail", { length: 255 }).default(`${env.NEXT_DEFAULT_CATEGORY_IMAGE}`).notNull(),
    nameEn: varchar("link", { length: 255 }).notNull(),
    parentId: integer("parent_id").references((): AnyPgColumn => category.id, { onDelete: "set null" }),
    createdAt: timestamp("created_at", { mode: "string" }).notNull().defaultNow(),
    updatedAt: timestamp("updated_at", { mode: "string" }).notNull().defaultNow(),
});

export const categoryRelations = relations(category, ({ many }) => ({
    product: many(product),
}));

const baseSchema = createInsertSchema(category, {
    id: schema => schema.id.min(1),
    nameFa: schema => schema.nameFa.min(1),
    nameEn: schema => schema.nameEn.min(1),
    thumbnail: schema => schema.thumbnail.min(1),
    parentId: schema => schema.parentId.min(1),
});
//schema

export const categorySchema = z.union([
    z.object({
        mode: z.literal("create"),
        nameFa: baseSchema.shape.nameFa,
        nameEn: baseSchema.shape.nameEn,
        thumbnail: baseSchema.shape.thumbnail,
        parentId: baseSchema.shape.parentId,
    }),
    z.object({
        mode: z.literal("edit"),
        id: z.number().min(1),
        nameFa: baseSchema.shape.nameFa,
        nameEn: baseSchema.shape.nameEn,
        thumbnail: baseSchema.shape.thumbnail,
        parentId: baseSchema.shape.parentId,
    }),
]);

export type CategorySchema = z.infer<typeof categorySchema>;
export type SelectCategoryModel = InferSelectModel<typeof category>;
