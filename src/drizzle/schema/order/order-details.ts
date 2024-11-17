import { integer, pgTable, serial } from "drizzle-orm/pg-core";
import { user, paymentDetails, orderItems } from "@/drizzle/schema";
import { relations } from "drizzle-orm";
import { z } from "zod";

//table
export const orderDetails = pgTable("order_details", {
    id: serial("id").notNull().primaryKey(),
    userId: integer("user_id")
        .notNull()
        .references(() => user.id),
    paymentId: integer("payment_id")
        .notNull()
        .references(() => paymentDetails.id),
    total: integer("total").notNull(),
    createdAt: integer("created_at").notNull(),
    updatedAt: integer("updated_at").notNull(),
});
//relations
export const orderDetailsRelations = relations(orderDetails, ({ one, many }) => ({
    user: one(user, {
        fields: [orderDetails.userId],
        references: [user.id],
    }),
    paymentDetails: one(paymentDetails, {
        fields: [orderDetails.paymentId],
        references: [paymentDetails.id],
    }),
    orderItems: many(orderItems),
}));
//schema
export const orderDetailsSchema = z.object({
    id: z.number().min(1),
    userId: z.number().min(1),
    paymentId: z.number().min(1),
});
//type exports for usage
