import { InferSelectModel, relations } from "drizzle-orm";
import { integer, pgTable, serial, timestamp, varchar } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod";

import { user } from "@/drizzle/schema";
//table
export const address = pgTable("address", {
    id: serial("id").notNull().primaryKey(),
    userId: integer("user_id")
        .notNull()
        .references(() => user.id),
    province: varchar("province", { length: 255 }).notNull(),
    city: varchar("city", { length: 255 }).notNull(),
    fullAddress: varchar("full_address", { length: 255 }).notNull(),
    postalCode: varchar("postal_code", { length: 255 }).notNull(),
    createdAt: timestamp("created_at", { mode: "string" }).notNull().defaultNow(),
    updatedAt: timestamp("updated_at", { mode: "string" }).notNull().defaultNow(),
});
//relations
export const addressRelations = relations(address, ({ one }) => ({
    user: one(user, {
        fields: [address.userId],
        references: [user.id],
    }),
}));
//schema
export const addressSchema = createInsertSchema(address, {
    id: schema => schema.id.min(1),
    province: schema => schema.province.min(1),
    city: schema => schema.city.min(1),
    fullAddress: schema => schema.fullAddress.min(1),
    postalCode: schema => schema.postalCode.min(1),
}).pick({
    id: true,
    province: true,
    city: true,
    fullAddress: true,
    postalCode: true,
});
//type exports for usage
export type AddressSchema = z.infer<typeof addressSchema>;
export type SelectAddressModel = InferSelectModel<typeof address>;
