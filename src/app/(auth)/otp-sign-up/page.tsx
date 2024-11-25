"use client";

import React from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";

import { useForm } from "react-hook-form";

import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

const otpSignUp = () => {
    const router = useRouter();

    const otpSignUpSchema = z.object({
        username: z
            .string()
            .max(11, { message: "شماره تلفن صحیح نمی باشد" })
            .regex(/((0?9)|(\+?989))\d{9}/g, { message: "شماره تلفن صحیح نمی باشد" }),
    });

    type otpForm = z.infer<typeof otpSignUpSchema>;

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<otpForm>({ resolver: zodResolver(otpSignUpSchema) });

    const onSubmit = (data: otpForm) => {
        router.push(`/otp-checkout?phoneNumber=${data.username}`);
    };

    return (
        <div className="h-screen flex justify-center items-center  mx-auto">
            <div className="bg-white border-[1px] w-full flex flex-col items-center max-w-[400px] px-6 py-4 rounded-md">
                <Image src={"/Logo.png"} alt="Logo" width={150} height={100} />
                <h2 className="ml-auto mt-4">ورود | ثبت نام</h2>
                <p className="ml-auto mt-10 text-[13px] text-gray-600 font-light">
                    لطفا شماره موبایل خود را وارد کنید. کد تایید به این شماره پیامک خواهد شد
                </p>

                <form onSubmit={handleSubmit(onSubmit)} className="ml-auto mt-4 w-full">
                    <input
                        type="text"
                        className={`w-full px-4 py-3 text-sm outline-none border ${errors.username ? " border-red-500 " : "border-blue-500"} rounded-lg`}
                        autoComplete="off"
                        {...register("username")}
                        autoFocus
                    />
                    {errors.username && <span className="text-[11px] text-red-500">{errors.username.message}</span>}
                    <button
                        type="submit"
                        className="w-full mt-6 mb-10 bg-red-500 text-white py-2 rounded-lg active:scale-95"
                    >
                        ورود
                    </button>
                </form>
            </div>
        </div>
    );
};

export default otpSignUp;
