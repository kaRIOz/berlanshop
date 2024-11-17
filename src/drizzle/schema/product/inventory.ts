import { relations } from "drizzle-orm";
import { integer, pgTable, serial, timestamp } from "drizzle-orm/pg-core";
import { product } from "@/drizzle/schema";

//table
export const inventory = pgTable("inventory", {
    id: serial("id").notNull().primaryKey(),
    productId: integer("product_id")
        .notNull()
        .references(() => product.id),
    quantity: integer("quantity").notNull(),
    createdAt: timestamp("created_at", { mode: "string" }).notNull().defaultNow(),
    updatedAt: timestamp("updated_at", { mode: "string" }).notNull().defaultNow(),
});
//relations
export const inventoryRelations = relations(inventory, ({ one }) => ({
    product: one(product),
}));
//schema

//type exports for usage
