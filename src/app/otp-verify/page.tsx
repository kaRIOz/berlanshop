import { Suspense } from "react";
import OTPClient from "./_components/otp-client";

export default async function OTPServerPage() {
    return (
        <Suspense fallback={"loading..."}>
            <OTPClient />
        </Suspense>
    );
}
