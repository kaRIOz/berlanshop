//table

import { boolean, decimal, pgTable, serial, timestamp, varchar } from "drizzle-orm/pg-core";
import { product } from "@/drizzle/schema";
import { relations, type InferSelectModel } from "drizzle-orm";
import { z } from "zod";

export const discount = pgTable("discount", {
    id: serial("id").notNull().primaryKey(),
    name: varchar("name", { length: 255 }).notNull(),
    description: varchar("description", { length: 255 }).notNull(),
    discountPercentage: decimal("discount_percentage", { precision: 10, scale: 2 }).notNull(),
    isActive: boolean().default(false),
    createdAt: timestamp("created_at", { mode: "string" }).notNull().defaultNow(),
    updatedAt: timestamp("updated_at", { mode: "string" }).notNull().defaultNow(),
    deletedAt: timestamp("deleted_at", { mode: "string" }).notNull(),
});

//relations
export const discountRelations = relations(discount, ({ many }) => ({
    product: many(product),
}));
//schema
export const discountSchema = z.object({
    id: z.number().min(1),
    name: z.string().min(1),
    description: z.string().min(1),
    discountPercentage: z.number().min(1),
    isActive: z.boolean().default(false),
});

//type exports for usage

export type DiscountSchema = z.infer<typeof discountSchema>;
export type SelectDiscountModel = InferSelectModel<typeof discount>;
