import React from "react";

export default function AuthLayout({
    children,
    otp,
    otpverify,
}: Readonly<{
    children: React.ReactNode;
    otp: React.ReactNode;
    otpverify: React.ReactNode;
}>) {
    return (
        <>
            {children}

            {otp}
            {otpverify}
        </>
    );
}
