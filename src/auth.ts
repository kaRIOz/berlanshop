/* eslint-disable no-unused-vars */
import NextAuth, { type DefaultSession, type User } from "next-auth";
import Credentials from "next-auth/providers/credentials";
import { signInByPhoneNumber } from "./app/(auth)/otp-verify/actions";
import { signInByEmailAndPassword } from "./app/(auth)/sign-in/actions";
import { authConfig } from "./auth.config";

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
                    } as User;
                } catch (e) {
                    throw new Error("Error signing in Auth");
                }
            },
        }),
    ],
    callbacks: {
        jwt({ token, user }) {
            if (user) {
                token.id = user.id;
                token.user = { ...user };
            }
            return token;
        },
        session({ session, token }) {
            Object.assign(session.user, token.user ?? {});
            return session;
        },
    },
});
