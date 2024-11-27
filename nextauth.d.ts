/* eslint-disable no-unused-vars */
/* eslint-disable @typescript-eslint/no-empty-object-type */
import { JWT } from "next-auth/jwt";

export interface UserToken {
    firstName?: string;
    lastName?: string;
    email?: string | null | undefined;
    age?: string;
    phoneNumber?: string;
    exp?: number;
    iss?: string;
    aud?: string;
}
export interface UserSession extends UserToken {}

export enum Role {
    user = "user",
    admin = "admin",
}

declare module "next-auth" {
    /**
     * The shape of the user object returned in the OAuth providers' `profile` callback,
     * or the second parameter of the `session` callback, when using a database.
     */
    interface User {
        firstName?: string;
        lastName?: string;
        email?: string;
        phoneNumber?: string;
        age?: string;
        role?: Role;
        subscribed?: boolean;
    }
    /**
     * The shape of the account object returned in the OAuth providers' `account` callback,
     * Usually contains information about the provider being used, like OAuth tokens (`access_token`, etc).
     */
    interface Account {}

    /**
     * Returned by `useSession`, `auth`, contains information about the active session.
     */
    interface Session {
        user: UserSession;
    }
}

declare module "next-auth/jwt" {
    /** Returned by the `jwt` callback and `auth`, when using JWT sessions */
    interface JWT {
        user: UserToken;
    }
}
