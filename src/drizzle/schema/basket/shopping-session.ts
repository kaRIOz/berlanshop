//table

import { integer, pgTable, serial } from "drizzle-orm/pg-core";
import { user, cartItem } from "@/drizzle/schema";
import { relations } from "drizzle-orm";

export const shoppingSession = pgTable("shopping_session", {
    id: serial("id").notNull().primaryKey(),
    userId: integer("user_id")
        .notNull()
        .references(() => user.id),
    total: integer("total").notNull(),
    createdAt: integer("created_at").notNull(),
    updatedAt: integer("updated_at").notNull(),
});
//relations
export const shoppingSessionRelations = relations(shoppingSession, ({ one, many }) => ({
    user: one(user, {
        fields: [shoppingSession.userId],
        references: [user.id],
    }),
    cartItems: many(cartItem),
}));
//schema

//type exports for usage
