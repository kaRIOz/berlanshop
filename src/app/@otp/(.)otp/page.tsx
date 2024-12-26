"use client";
import React from "react";
import { usePathname } from "next/navigation";

import Modal from "@/components/modal/Modal";
import OTPSign from "@/app/otp/_components/otp-sign";

const InterceptedOtp = () => {
    const pathname = usePathname();
    return (
        pathname === "/otp" && (
            <Modal>
                <OTPSign />
            </Modal>
        )
    );
};

export default InterceptedOtp;
