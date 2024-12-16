import React from "react";

export default function AuthLayout({
    children,
    otp,
    otpverify,
}: Readonly<{
    children: React.ReactNode;
    otp: never;
    otpverify: never;
}>) {
    return (
        <>
            {children}
            {otp}
            {otpverify}
        </>
    );
}
