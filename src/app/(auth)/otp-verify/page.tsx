"use client";
import React, { useActionState, useEffect, useTransition } from "react";
import Image from "next/image";
import Link from "next/link";
import { redirect, useSearchParams } from "next/navigation";

import { useForm, type SubmitHandler } from "react-hook-form";

import { zodResolver } from "@hookform/resolvers/zod";
import { Loading } from "@/components/loading";
import { OTPVerifySchema, type OTPVerifyType } from "./types";
import { signInAction } from "./actions";
import { getSession } from "next-auth/react";

const OTPVerify = () => {
    const phoneNumber = useSearchParams().get("phoneNumber");

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<OTPVerifyType>({
        resolver: zodResolver(OTPVerifySchema),
        defaultValues: { phoneNumber: phoneNumber as string },
    });
    const [isPending, startTransition] = useTransition();
    const [formState, action] = useActionState(signInAction, undefined);

    useEffect(() => {
        if (formState) {
            console.log("formState", formState);
            const fetchSession = async () => await getSession();
            fetchSession();
            redirect("/");
        }
    }, [formState]);

    const onSubmit: SubmitHandler<OTPVerifyType> = data => {
        const formData = new FormData();
        formData.append("phoneNumber", data.phoneNumber);
        formData.append("verificationCode", data.verificationCode);
        startTransition(async () => await action(formData));
    };
    return (
        <div className="h-screen flex justify-center items-center  mx-auto">
            <div className="bg-white border-[1px] w-full flex flex-col items-center max-w-[400px] px-6 py-4 rounded-md">
                <Image src={"/Logo.png"} alt="Logo" width={150} height={100} />
                <h2 className="ml-auto mt-4">کد تایید را وارد کنید</h2>
                <p className="ml-auto mt-6 text-[13px] text-gray-600 font-light">
                    کد تایید برای شماره {` "${phoneNumber}" `} پیامک شد
                </p>

                <form onSubmit={handleSubmit(onSubmit)} className="ml-auto mt-4 w-full">
                    <input {...register("phoneNumber")} type="text" hidden className={`hidden`} />
                    <input
                        type="text"
                        className={`w-full px-4 py-3 text-sm outline-none border border-blue-500 rounded-lg text-center`}
                        autoComplete="off"
                        {...register("verificationCode")}
                        autoFocus
                    />
                    {errors.verificationCode && (
                        <span className="text-[11px] text-red-500">{errors.verificationCode.message}</span>
                    )}
                    <button
                        disabled={isPending}
                        type="submit"
                        className="w-full mt-6 mb-2 bg-red-500 text-white py-2 rounded-lg active:scale-95"
                    >
                        {!isPending ? "تایید" : <Loading />}
                    </button>

                    <Link href={"/otp"}>
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

export default OTPVerify;
