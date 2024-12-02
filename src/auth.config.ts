import type { NextAuthConfig } from "next-auth";

export const authConfig = {
    callbacks: {
        async authorized({ auth, request }) {
            const { nextUrl } = request;
            const isAuthenticated = !!auth?.user;
            const authRoutes = ["/otp", "/otp-verify", "/sign-in", "/sign-up", "/forget-password"];
            const adminRoutes = ["/admin"];
            const isAuthRoutes = authRoutes.includes(nextUrl.pathname);

            if (isAuthenticated && isAuthRoutes) {
                return Response.redirect(new URL("/", nextUrl));
            }
            return true;
        },
    },
    providers: [],
} satisfies NextAuthConfig;
