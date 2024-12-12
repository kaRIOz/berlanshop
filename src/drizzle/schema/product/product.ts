//table
import { integer, pgTable, serial, timestamp, varchar } from "drizzle-orm/pg-core";
import { cartItem, category, discount, inventory, orderItems } from "@/drizzle/schema";
import { relations, type InferSelectModel } from "drizzle-orm";
import { z } from "zod";
import { createInsertSchema } from "drizzle-zod";
import env from "@/configs/env";

export const product = pgTable("product", {
    id: serial("id").notNull().primaryKey(),
    name: varchar("name", { length: 255 }).notNull(),
    description: varchar("description", { length: 255 }).notNull(),
    SKU: varchar("sku", { length: 255 }).notNull(),
    price: varchar("price", { length: 255 }).notNull(),
    thumbnail: varchar("thumbnail", { length: 255 }).default(`${env.NEXT_DEFAULT_PRODUCT_IMAGE}`),
    categoryId: integer("category_id").references(() => category.id, { onDelete: "set null" }),
    inventoryId: integer("inventory_id").references(() => category.id, { onDelete: "set null" }),
    discountId: integer("discount_id").references(() => discount.id, { onDelete: "set null" }),
    createdAt: timestamp("created_at", { mode: "string" }).notNull().defaultNow(),
    updatedAt: timestamp("updated_at", { mode: "string" }),
    deletedAt: timestamp("deleted_at", { mode: "string" }),
});

export const productRelations = relations(product, ({ one }) => ({
    category: one(category, {
        fields: [product.categoryId],
        references: [category.id],
    }),
    inventory: one(inventory, {
        fields: [product.inventoryId],
        references: [inventory.id],
    }),
    discount: one(discount, {
        fields: [product.discountId],
        references: [discount.id],
    }),
    cartItems: one(cartItem),
    orderItems: one(orderItems),
}));

const baseSchema = createInsertSchema(product, {
    id: schema => schema.id.min(1),
    name: schema => schema.name.min(1),
    description: schema => schema.description.min(1).max(255),
    categoryId: schema => schema.categoryId.min(1).nullable(),
    SKU: schema => schema.SKU.min(1),
    price: schema => schema.price.min(1),
    thumbnail: schema => schema.thumbnail.min(1),
});

export const productSchema = z.union([
    z.object({
        mode: z.literal("create"),
        name: baseSchema.shape.name,
        price: baseSchema.shape.price,
        description: baseSchema.shape.description,
        SKU: baseSchema.shape.SKU,
        thumbnail: baseSchema.shape.thumbnail,
        categoryId: baseSchema.shape.categoryId,
    }),
    z.object({
        mode: z.literal("edit"),
        id: z.number().min(1),
        name: baseSchema.shape.name,
        price: baseSchema.shape.price,
        description: baseSchema.shape.description,
        SKU: baseSchema.shape.SKU,
        thumbnail: baseSchema.shape.thumbnail,
        categoryId: baseSchema.shape.categoryId,
    }),
]);

export type ProductSchema = z.infer<typeof productSchema>;
export type SelectProductModel = InferSelectModel<typeof product>;
