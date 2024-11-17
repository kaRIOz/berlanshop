//table
import { integer, pgTable, serial, timestamp, varchar } from "drizzle-orm/pg-core";
import { cartItem, category, discount, inventory, orderItems } from "@/drizzle/schema";
import { relations, type InferSelectModel } from "drizzle-orm";
import { z } from "zod";

export const product = pgTable("product", {
    id: serial("id").notNull().primaryKey(),
    name: varchar("name", { length: 255 }).notNull(),
    description: varchar("description", { length: 255 }).notNull(),
    SKU: varchar("sku", { length: 255 }).notNull(),
    price: varchar("price", { length: 255 }).notNull(),
    thumbnail: varchar("thumbnail", { length: 255 }).notNull(),
    images: varchar("images", { length: 255 }).notNull(),
    categoryId: integer("category_id")
        .notNull()
        .references(() => category.id),
    inventoryId: integer("inventory_id")
        .notNull()
        .references(() => category.id),
    discountId: integer("discount_id")
        .notNull()
        .references(() => category.id),
    createdAt: timestamp("created_at", { mode: "string" }).notNull().defaultNow(),
    updatedAt: timestamp("updated_at", { mode: "string" }).notNull(),
    deletedAt: timestamp("deleted_at", { mode: "string" }).notNull(),
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

export const productSchema = z
    .object({
        id: z.number().min(1),
        name: z.string().min(1),
        price: z.string().min(1),
        description: z.string().min(1),
        SKU: z.string().min(1),
        thumbnail: z.string().min(1),
        images: z.string().min(1),
        categoryId: z.string().min(1),
        inventoryId: z.string().min(1),
        discountId: z.string().min(1),
    })
    .pick({
        id: true,
        name: true,
        price: true,
        description: true,
        SKU: true,
        thumbnail: true,
        images: true,
        categoryId: true,
        inventoryId: true,
        discountId: true,
    });

export type ProductSchema = z.infer<typeof productSchema>;
export type SelectProductModel = InferSelectModel<typeof product>;
