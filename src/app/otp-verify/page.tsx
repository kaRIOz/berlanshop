"use client";
import React, { useActionState, useEffect, useTransition } from "react";
import Image from "next/image";
import Link from "next/link";
import { redirect, useSearchParams } from "next/navigation";

import { useForm, Controller, type SubmitHandler } from "react-hook-form";

import { zodResolver } from "@hookform/resolvers/zod";
import { Loading } from "@/components/loading";
import { OTPVerifySchema, type OTPVerifyType } from "./types";
import { signInAction } from "./actions";
import { getSession } from "next-auth/react";
import { toast } from "@/components/ui/use-toast";
import { InputOTP, InputOTPGroup, InputOTPSlot } from "@/components/ui/input-otp";

const OTPVerify = () => {
    const phoneNumber = useSearchParams().get("phoneNumber");

    const {
        register,
        handleSubmit,
        control,
        formState: { errors },
    } = useForm<OTPVerifyType>({
        resolver: zodResolver(OTPVerifySchema),
        defaultValues: { phoneNumber: phoneNumber as string },
    });

    const [isPending, startTransition] = useTransition();
    const [formState, action] = useActionState(signInAction, undefined);

    useEffect(() => {
        if (formState) {
            toast({
                title: formState.message,
                variant: !!formState.success ? "default" : "destructive",
            });
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
        <div className="flex justify-center items-center">
            <div className=" w-full flex flex-col items-center max-w-[350px] rounded-md">
                <Image src={"/Logo.png"} alt="Logo" width={150} height={100} />
                <h2 className="ml-auto mt-4">کد تایید را وارد کنید</h2>
                <p className="ml-auto mt-6 text-[13px] text-gray-600 font-light">
                    کد تایید برای شماره {` "${phoneNumber}" `} پیامک شد
                </p>

                <form onSubmit={handleSubmit(onSubmit)} className="ml-auto mt-4 w-full">
                    {/* honey pot */}
                    <input {...register("phoneNumber")} type="text" hidden className={`hidden`} />
                    <Controller
                        name="verificationCode"
                        control={control}
                        render={({ field }) => (
                            <InputOTP maxLength={6} {...field}>
                                <InputOTPGroup className="gap-2">
                                    <InputOTPSlot index={5} />
                                    <InputOTPSlot index={4} />
                                    <InputOTPSlot index={3} />
                                    <InputOTPSlot index={2} />
                                    <InputOTPSlot index={1} />
                                    <InputOTPSlot index={0} />
                                </InputOTPGroup>
                            </InputOTP>
                        )}
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
