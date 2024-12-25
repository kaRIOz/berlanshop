"use client";
import React from "react";
import { usePathname } from "next/navigation";

import OTPSign from "@/app/otp/_components/otp-sign";
import OTPModal from "@/components/otp-modal/OTPModal";

const InterceptedOtp = () => {
    const pathname = usePathname();

    console.log(pathname);

    return (
        pathname === "/otp" && (
            <OTPModal>
                <OTPSign />
            </OTPModal>
        )
    );
};

export default InterceptedOtp;
