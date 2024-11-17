import { integer, pgTable, serial } from "drizzle-orm/pg-core";
import { product, orderDetails } from "@/drizzle/schema";
import { relations, type InferSelectModel } from "drizzle-orm";
import { z } from "zod";

//table
export const orderItems = pgTable("order_items", {
    id: serial("id").notNull().primaryKey(),
    productId: integer("product_id")
        .notNull()
        .references(() => product.id),
    orderId: integer("order_id")
        .notNull()
        .references(() => orderDetails.id),
    quantity: integer("quantity").notNull(),
});
//relations
export const orderItemsRelations = relations(orderItems, ({ one }) => ({
    product: one(product, {
        fields: [orderItems.productId],
        references: [product.id],
    }),
    orderDetails: one(orderDetails, {
        fields: [orderItems.orderId],
        references: [orderDetails.id],
    }),
}));
//schema

export const orderIttemSchema = z.object({
    id: z.number().min(1),
    productId: z.number().min(1),
    orderId: z.number().min(1),
    quantity: z.number().min(1),
});

//type exports for usage
export type OrderIttemSchema = z.infer<typeof orderIttemSchema>;
export type SelectOrderIttemModel = InferSelectModel<typeof orderItems>;
