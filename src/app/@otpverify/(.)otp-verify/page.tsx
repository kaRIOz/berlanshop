import Modal from "@/components/modal/Modal";
import React from "react";
import OTPClient from "@/app/otp-verify/_components/otp-client";

const InterceptedOtpVerify = () => {
    return (
        <Modal>
            <OTPClient />
        </Modal>
    );
};

export default InterceptedOtpVerify;
