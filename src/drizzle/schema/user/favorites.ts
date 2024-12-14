import { integer, pgTable, primaryKey, serial } from "drizzle-orm/pg-core";

import { product, user } from "@/drizzle/schema";
import { relations } from "drizzle-orm";

//table
export const favorites = pgTable(
    "favorites",
    {
        userId: integer("user_id").references(() => user.id),
        productId: integer("product_id").references(() => product.id),
    },
    table => {
        return [
            {
                pk: primaryKey({ columns: [table.productId, table.userId] }),
                pkWithCustomName: primaryKey({ name: "favorite_id", columns: [table.productId, table.userId] }),
            },
        ];
    },
);
//relations
export const favoritesRelations = relations(favorites, ({ one }) => ({
    user: one(user, {
        fields: [favorites.userId],
        references: [user.id],
    }),
    product: one(product, {
        fields: [favorites.productId],
        references: [product.id],
    }),
}));
//schema

//export types
