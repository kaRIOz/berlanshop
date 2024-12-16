import Modal from "@/components/modal/Modal";
import React from "react";
import OTPSign from "../../otp/_components/otp-sign";

const InterceptedOtp = () => {
    return (
        <Modal>
            <OTPSign />
        </Modal>
    );
};

export default InterceptedOtp;
