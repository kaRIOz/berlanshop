"use client";

import React, { useState } from "react";
import OTPSign from "../otp/_components/otp-sign";
import OTPClient from "../otp-verify/_components/otp-client";

const LoginPage = () => {
    const [show, setShow] = useState(true);
    return (
        <div className="flex items-center justify-center h-screen">
            {show ? <OTPSign setShow={setShow} /> : <OTPClient setShow={setShow} />}
        </div>
    );
};

export default LoginPage;
