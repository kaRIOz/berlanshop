import Modal from "@/components/modal/Modal";
import React from "react";
import OTPVerify from "../../otp-verify/page";

const InterceptedOtpVerify = () => {
    return (
        <Modal>
            <OTPVerify />
        </Modal>
    );
};

export default InterceptedOtpVerify;
