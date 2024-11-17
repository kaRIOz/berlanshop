import { relations, type InferSelectModel } from "drizzle-orm";
import { integer, pgTable, serial, timestamp, varchar } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod";
import { role } from "@/drizzle/schema";

//table
export const admin = pgTable("admin", {
    id: serial("id").notNull().primaryKey(),
    username: varchar("username", { length: 255 }).notNull(),
    password: varchar("password", { length: 255 }).notNull(),
    firstName: varchar("first_name", { length: 255 }).notNull(),
    lastName: varchar("last_name", { length: 255 }).notNull(),
    email: varchar("email", { length: 255 }).notNull(),
    roleId: integer("role_id")
        .notNull()
        .references(() => role.id),
    phoneNumber: varchar("phone_number", { length: 255 }).notNull(),
    code: varchar("code", { length: 255 }).notNull(),
    codeExpiration: timestamp("code_expiration").notNull().defaultNow(),
    lastLogin: timestamp("last_login", { mode: "string" }).notNull().defaultNow(),
    createdAt: timestamp("created_at", { mode: "string" }).notNull().defaultNow(),
    modifiedAt: timestamp("modified_at", { mode: "string" }).notNull().defaultNow(),
});

//relations
export const adminRelations = relations(admin, ({ one }) => ({
    role: one(role, {
        fields: [admin.roleId],
        references: [role.id],
    }),
}));
//schema
const baseSchema = createInsertSchema(admin, {
    username: schema => schema.username.min(1),
    password: schema => schema.password.regex(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/),
    firstName: schema => schema.firstName.min(1),
    lastName: schema => schema.lastName.min(1),
    email: schema => schema.email.email(),
    phoneNumber: schema => schema.phoneNumber.regex(/^09[0-9]{9}$/),
    code: schema => schema.code.min(6).max(6),
    roleId: schema => schema.roleId.min(1),
}).pick({
    username: true,
    password: true,
    firstName: true,
    lastName: true,
    email: true,
    roleId: true,
    phoneNumber: true,
    code: true,
});

export const adminSchema = z.union([
    z.object({
        mode: z.literal("signInByPhoneNumber"),
        phoneNumber: baseSchema.shape.phoneNumber,
        code: baseSchema.shape.code,
    }),
    z.object({
        mode: z.literal("signInByEmail"),
        email: baseSchema.shape.email,
        password: baseSchema.shape.password,
    }),
]);

//export types

export type AdminSchema = z.infer<typeof adminSchema>;
export type SelectAdminModel = InferSelectModel<typeof admin>;
