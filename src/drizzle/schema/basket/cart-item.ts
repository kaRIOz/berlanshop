import { integer, pgTable, serial, timestamp } from "drizzle-orm/pg-core";
import { product, shoppingSession } from "@/drizzle/schema";
import { relations, type InferSelectModel } from "drizzle-orm";
import { z } from "zod";

//table
export const cartItem = pgTable("cart_item", {
    id: serial("id").notNull().primaryKey(),
    productId: integer("product_id")
        .notNull()
        .references(() => product.id),
    sessionId: integer("session_id").references(() => shoppingSession.id),
    quantity: integer("quantity").notNull(),
    createdAt: timestamp("created_at", { mode: "string" }).notNull().defaultNow(),
    updatedAt: timestamp("updated_at", { mode: "string" }).notNull().defaultNow(),
});
//relations
export const cartItemRelations = relations(cartItem, ({ one }) => ({
    product: one(product, {
        fields: [cartItem.productId],
        references: [product.id],
    }),
    shoppingSession: one(shoppingSession, {
        fields: [cartItem.sessionId],
        references: [shoppingSession.id],
    }),
}));
//schema

export const cartItemSchema = z.object({
    id: z.number().min(1),
    productId: z.number().min(1),
    sessionId: z.number().min(1),
    quantity: z.number().min(1),
});

//type exports for usage

export type CartItemSchema = z.infer<typeof cartItemSchema>;
export type SelectCartItemModel = InferSelectModel<typeof cartItem>;
