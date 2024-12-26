import type { Role, UserToken } from "$/next-auth";
import type { NextAuthConfig } from "next-auth";

declare module "next-auth/jwt" {
    /** Returned by the `jwt` callback and `auth`, when using JWT sessions */
    interface JWT {
        user: UserToken;
    }
}

declare module "@auth/core/jwt" {
    interface JWT {
        user: UserToken;
    }
    // eslint-disable-next-line @typescript-eslint/no-empty-object-type
    export interface UserSession extends UserToken {}

    interface Session {
        user: UserSession;
    }
    interface DefaultJWT {
        firstName?: string;
        lastName?: string;
        email?: string | null;
        phoneNumber?: string;
        age?: string;
        role?: Role.admin | Role.user;
        subscribed?: boolean;
    }
    interface User {
        firstName?: string;
        lastName?: string;
        email?: string;
        phoneNumber?: string;
        age?: string;
        role?: Role.admin | Role.user;
        subscribed?: boolean;
    }
}

declare module "@auth/core/types" {
    interface JWT {
        user: UserToken;
    }

    // eslint-disable-next-line @typescript-eslint/no-empty-object-type
    export interface UserSession extends UserToken {}

    interface Session {
        user: UserSession;
    }
    interface User {
        firstName?: string;
        lastName?: string;
        email?: string | null;
        phoneNumber?: string;
        age?: string;
        role?: Role.admin | Role.user;
        subscribed?: boolean;
    }
}

export const authConfig = {
    callbacks: {
        async authorized({ auth, request }) {
            const { nextUrl } = request;
            const isAuthenticated = !!auth?.user;
            const isAdminRole = auth?.user.role === "admin";
            const authRoutes = ["/otp", "/otp-verify", "/sign-in", "/sign-up", "/forget-password"];
            const adminRoutes = ["/admin"];
            const userRoutes = ["/profile"];
            const isAuthRoutes = authRoutes.includes(nextUrl.pathname);
            const isAdminRoutes = adminRoutes.includes(nextUrl.pathname);
            const isUserRoutes = userRoutes.includes(nextUrl.pathname);
            if (isAuthenticated && isAuthRoutes) {
                return Response.redirect(new URL("/", nextUrl));
            } else if (!isAdminRole && isAdminRoutes) {
                return Response.redirect(new URL("/", nextUrl));
            } else if (!isAuthenticated && (isUserRoutes || isAdminRoutes)) {
                return Response.redirect(new URL("/", nextUrl));
            } else {
                return true;
            }
        },
    },
    providers: [],
} satisfies NextAuthConfig;
