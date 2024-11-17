import { relations, type InferSelectModel } from "drizzle-orm";
import { integer, pgTable, serial, timestamp, varchar } from "drizzle-orm/pg-core";
import { orderDetails } from "@/drizzle/schema";
import { z } from "zod";

//table
export const paymentDetails = pgTable("payment_details", {
    id: serial("id").notNull().primaryKey(),
    orderId: integer("order_id"),
    amount: integer("amount").notNull(),
    provider: varchar("provider", { length: 255 }).notNull(),
    status: varchar("status", { length: 255 }).notNull(),
    createdAt: timestamp("created_at", { mode: "string" }).notNull().defaultNow(),
    updatedAt: timestamp("updated_at", { mode: "string" }).notNull().defaultNow(),
});
//relations
export const paymentDetailsRelations = relations(paymentDetails, ({ one }) => ({
    orderDetails: one(orderDetails),
}));
//schema
export const paymentDetailsSchema = z.object({
    id: z.number().min(1),
    orderId: z.number().min(1),
    amount: z.number().min(1),
    provider: z.string().min(1),
    status: z.string().min(1),
});
//type exports for usage
export type PaymentDetailsSchema = z.infer<typeof paymentDetailsSchema>;
export type SelectPaymentDetailsModel = InferSelectModel<typeof paymentDetails>;
