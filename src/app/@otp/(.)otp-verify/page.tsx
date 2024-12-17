"use client";

import React from "react";
import Modal from "@/components/modal/Modal";
import { usePathname } from "next/navigation";
import OTPClient from "@/app/otp-verify/_components/otp-client";

const InterceptedOtpVerify = () => {
    const pathname = usePathname();
    return (
        pathname === "/otp-verify" && (
            <Modal>
                <OTPClient />
            </Modal>
        )
    );
};

export default InterceptedOtpVerify;
