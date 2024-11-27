"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { useSearchParams } from "next/navigation";

import { useForm } from "react-hook-form";

import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

import Logo from "../../../../public/Logo.png";
const otpCheckout = () => {
    const otpCheckoutSchema = z.object({
        payamak: z.string(),
    });

    const params = useSearchParams();

    console.log(params.get("phoneNumber"));

    type checkoutForm = z.infer<typeof otpCheckoutSchema>;

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<checkoutForm>({ resolver: zodResolver(otpCheckoutSchema) });

    const onSubmit = () => {
        console.log("hi");
    };
    return (
        <div className="h-screen flex justify-center items-center  mx-auto">
            <div className="bg-white border-[1px] w-full flex flex-col items-center max-w-[400px] px-6 py-4 rounded-md">
                <Image src={Logo} alt="Logo" width={150} />
                <h2 className="ml-auto mt-4">کد تایید را وارد کنید</h2>
                <p className="ml-auto mt-6 text-[13px] text-gray-600 font-light">
                    کد تایید برای شماره {params.get("phoneNumber")} پیامک شد
                </p>

                <form onSubmit={handleSubmit(onSubmit)} className="ml-auto mt-4 w-full">
                    <input
                        type="text"
                        className={`w-full px-4 py-3 text-sm outline-none border border-blue-500 rounded-lg text-center tracking-[8px]`}
                        autoComplete="off"
                        {...register("payamak")}
                        autoFocus
                    />
                    {/* {errors.username && <span className="text-[11px] text-red-500">{errors.payamak.message}</span>} */}
                    <button
                        type="submit"
                        className="w-full mt-6 mb-2 bg-red-500 text-white py-2 rounded-lg active:scale-95"
                    >
                        تایید
                    </button>

                    <Link href={"/otp-sign-up"}>
                        <button className="w-full text-sm border border-red-500 py-1 mb-4 rounded-lg active:scale-95">
                            {" "}
                            تغییر شماره موبایل
                        </button>
                    </Link>
                </form>
            </div>
        </div>
    );
};

export default otpCheckout;
