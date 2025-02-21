"use client";

import React from "react";
import { usePathname } from "next/navigation";
import OTPClient from "@/app/otp-verify/_components/otp-client";
import OTPModal from "@/components/otp-modal/OTPModal";

const InterceptedOtpVerify = () => {
    const pathname = usePathname();
    return (
        pathname === "/otp-verify" && (
            <OTPModal>
                <OTPClient />
            </OTPModal>
        )
    );
};

export default InterceptedOtpVerify;
