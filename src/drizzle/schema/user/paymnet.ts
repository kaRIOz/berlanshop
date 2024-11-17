import { integer, pgTable, serial, timestamp, varchar } from "drizzle-orm/pg-core";
import { user } from "@/drizzle/schema";
import { relations, type InferSelectModel } from "drizzle-orm";
import { z } from "zod";

//table
export const peyment = pgTable("payment", {
    id: serial("id").notNull().primaryKey(),
    userId: integer("user_id")
        .notNull()
        .references(() => user.id),
    paymentType: varchar("payment_type", { length: 255 }).notNull(),
    provider: varchar("provider", { length: 255 }).notNull(),
    accountNO: varchar("account_no", { length: 255 }).notNull(),
    expiry: timestamp("expiry", { mode: "string" }).notNull().defaultNow(),
});

//relations
export const paymnetRelations = relations(peyment, ({ one }) => ({
    user: one(user, {
        fields: [peyment.userId],
        references: [user.id],
    }),
}));

//schema
export const peymentSchema = z
    .object({
        id: z.number().min(1),
        peymentType: z.string().min(1),
        provider: z.string().min(1),
        accountNo: z.string().min(1),
    })
    .pick({ id: true, peymentType: true, provider: true, accountNo: true });

//type exports for usage

export type PeymentSchema = z.infer<typeof peymentSchema>;
export type SelectPeymentModel = InferSelectModel<typeof peyment>;
