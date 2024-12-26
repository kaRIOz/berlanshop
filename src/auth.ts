/* eslint-disable no-unused-vars */
import NextAuth, { type DefaultSession, type User } from "next-auth";
import Credentials from "next-auth/providers/credentials";

import { signInByEmailAndPassword } from "./app/(auth)/sign-in/actions";
import { authConfig } from "./auth.config";
import { signInByPhoneNumber } from "./app/otp-verify/actions";

export const { handlers, signIn, signOut, auth } = NextAuth({
    ...authConfig,
    trustHost: true,
    // adapter: DrizzleAdapter(db),
    pages: {
        signIn: "/otp",
    },
    session: {
        maxAge: 172800,
        updateAge: 86400,
    },
    providers: [
        Credentials({
            name: "user",
            id: "user",
            credentials: {
                phoneNumber: { label: "phoneNumber", type: "text" },
                verificationCode: { label: "verificationCode", type: "text" },
            },

            authorize: async credentials => {
                try {
                    const dbUser = await signInByPhoneNumber(credentials);
                    if (!dbUser) {
                        throw new Error("User not found / Wrong credentials");
                    }

                    return {
                        id: dbUser.id.toString(),
                        firstName: dbUser.firstName,
                        lastName: dbUser.lastName,
                        phoneNumber: dbUser.phoneNumber,
                        role: "user",
                    } as User;
                } catch (e) {
                    throw new Error("Error signing in Auth");
                }
            },
        }),
        Credentials({
            name: "admin",
            id: "admin",
            credentials: {
                username: { label: "username", type: "text" },
                password: { label: "password", type: "text" },
            },

            authorize: async credentials => {
                try {
                    const dbUser = await signInByEmailAndPassword(credentials);
                    if (!dbUser) {
                        throw new Error("User not found / Wrong credentials");
                    }
                    return {
                        id: dbUser.id.toString(),
                        email: dbUser.username,
                        firstName: dbUser.firstName,
                        lastName: dbUser.lastName,
                        role: dbUser.role.roleName,
                    } as User;
                } catch (e) {
                    throw new Error("Error signing in Auth");
                }
            },
        }),
    ],
    callbacks: {
        jwt({ token, user, trigger }) {
            if (user) {
                token.id = user.id;
                token.user = { ...user };
            }
            // if(trigger === 'update'){
            //     const updatedUser = await
            // }
            console.log(token);
            return token;
        },
        session({ session, token }) {
            Object.assign(session.user, token.user ?? {});
            return session;
        },
    },
});
