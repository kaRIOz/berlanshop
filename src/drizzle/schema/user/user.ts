import { InferSelectModel, relations } from "drizzle-orm";
import { integer, pgTable, serial, timestamp, varchar } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod";
import { address, shoppingSession } from "@/drizzle/schema";

export const user = pgTable("user", {
    id: serial("id").notNull().primaryKey(),
    phoneNumber: varchar("phoneNumber", { length: 12 }).notNull().unique(),
    email: varchar("email", { length: 128 }).unique(),
    firstName: varchar("first_name", { length: 255 }),
    lastName: varchar("last_name", { length: 255 }),
    age: integer("age"),
    password: varchar("password", { length: 12 }),
    verificationCode: varchar("verification_code", { length: 32 }),
    codeExpiresAt: timestamp("code_expires_at", { mode: "string" }).defaultNow(),
    createdAt: timestamp("created_at", { mode: "string" }).notNull().defaultNow(),
    updatedAt: timestamp("updated_at", { mode: "string" }).notNull().defaultNow(),
});

export const userRelations = relations(user, ({ many, one }) => ({
    address: many(address),
    shoppingSession: one(shoppingSession),
}));

const baseSchema = createInsertSchema(user, {
    firstName: schema => schema.firstName,
    lastName: schema => schema.lastName,
    phoneNumber: schema =>
        schema.phoneNumber
            .max(11, { message: "شماره تلفن صحیح نمی باشد" })
            .regex(/((0?9)|(\+?989))\d{9}/g, { message: "شماره تلفن صحیح نمی باشد" }),
    verificationCode: schema => schema.verificationCode.min(6).max(6).nullish(),
    password: schema => schema.password,
    email: schema => schema.email.email(),
    age: z.coerce.number().min(18).max(99).nullish(),
});

export const userSchema = z.union([
    z.object({
        mode: z.literal("checkPhoneNumber"),
        phoneNumber: baseSchema.shape.phoneNumber,
    }),
    z.object({
        mode: z.literal("signInByEmail"),
        email: baseSchema.shape.email,
        password: baseSchema.shape.password,
    }),
    z.object({
        mode: z.literal("singInByPhoneNumber"),
        phoneNumber: baseSchema.shape.phoneNumber,
        verificationCode: baseSchema.shape.verificationCode,
    }),
]);

export type UserSchema = z.infer<typeof userSchema>;
export type SelectUserModel = InferSelectModel<typeof user>;
