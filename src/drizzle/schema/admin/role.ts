//table

import { relations, type InferSelectModel } from "drizzle-orm";
import { pgTable, serial, timestamp, varchar } from "drizzle-orm/pg-core";
import { admin } from "@/drizzle/schema";
import { z } from "zod";

export const role = pgTable("role", {
    id: serial("id").notNull().primaryKey(),
    roleName: varchar("role_name", { length: 255 }).notNull(),
    permissions: varchar("permissions", { length: 255 }).notNull(),
    createdAt: timestamp("created_at", { mode: "string" }).notNull().defaultNow(),
    modifiedAt: timestamp("modified_at", { mode: "string" }).notNull().defaultNow(),
});
//relations
export const roleRelations = relations(role, ({ many }) => ({
    admin: many(admin),
}));
//schema

export const roleSchema = z
    .object({
        id: z.number().min(1),
        roleName: z.string().min(1),
        permissions: z.string().min(1),
    })
    .pick({
        id: true,
        roleName: true,
        permissions: true,
    });
//type exports for usage

export type RoleSchema = z.infer<typeof roleSchema>;
export type SelectRoleModel = InferSelectModel<typeof role>;
