"use client";

import React, { useTransition } from "react";
import Image from "next/image";
import { useForm, type SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Loading } from "@/components/loading";
import { otpSignUpSchema, type OTPForm } from "./types";
import { checkPhoneNumber } from "./actions";
import { useRouter } from "next/navigation";
import { toast } from "@/components/ui/use-toast";
import { ToastAction } from "@/components/ui/toast";
import { useCopyToClipboard } from "usehooks-ts";

const OTPSign = () => {
    const router = useRouter();
    const [copiedText, copy] = useCopyToClipboard();
    const handleCopy = (text: string) => () => {
        copy(text)
            .then(() => {
                toast({
                    variant: "default",
                    title: `Copied Successfully!`,
                });
            })
            .catch(error => {
                toast({
                    variant: "destructive",
                    title: `Failed ${error}`,
                });
                console.error("Failed to copy!", error);
            });
    };
    const [isPending, startTransition] = useTransition();
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<OTPForm>({ resolver: zodResolver(otpSignUpSchema) });

    const onSubmit: SubmitHandler<OTPForm> = async data => {
        startTransition(async () => {
            const response = await checkPhoneNumber(data);
            toast({
                title: "Verification code sent successfully",
                variant: response.success === true ? "default" : "destructive",
                description: response.message,
                action: (
                    <ToastAction onClick={handleCopy(response.message)} altText="Goto schedule to undo">
                        Copy
                    </ToastAction>
                ),
            });
            router.push("/otp-verify?phoneNumber=" + data.phoneNumber);
        });
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
                        {...register("phoneNumber")}
                        type="text"
                        name="phoneNumber"
                        className={`w-full px-4 py-3 text-sm outline-none border ${errors.phoneNumber ? " border-red-500 " : "border-blue-500"} rounded-lg`}
                        autoComplete="mobile tel"
                        autoFocus
                    />
                    {errors.phoneNumber && (
                        <span className="text-[11px] text-red-500">{errors.phoneNumber.message}</span>
                    )}
                    <button
                        disabled={isPending}
                        type="submit"
                        className="w-full mt-6 mb-10 bg-red-500 text-white py-2 rounded-lg active:scale-95"
                    >
                        {!isPending ? "ورود" : <Loading />}
                    </button>
                </form>
            </div>
        </div>
    );
};

export default OTPSign;
