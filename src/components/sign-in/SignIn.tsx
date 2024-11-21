"use client";

import React, { useState, useTransition } from "react";
import { useForm, UseFormHandleSubmit } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Span } from "next/dist/trace";
import { Label } from "@/components/ui/label";

// type SignInForm = {
//     username: string;
//     password: string;
// }

const signInSchema = z.object({
    username: z
        .string()
        .min(1, {
            message: "ایمیل الزامی است",
        })
        .email({
            message: "ایمیل معتبر نیست",
        }),
    password: z
        .string()
        .min(1, {
            message: "رمز عبور الزامی است",
        })
        .min(8, {
            message: "رمز حداقل باید 8 کارکتر باشد",
        }),
    // .regex(/^(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>/?])/, {
    //     message: "حداقل باید یک کارتر باشد",
    // })
    remember: z.boolean().default(false),
});

type SignInForm = z.infer<typeof signInSchema>;

const SignIn = () => {
    const [input, setInput] = useState("");
    const [isPending, startTransition] = useTransition();
    const {
        register,
        handleSubmit,
        formState: { errors },
        getValues,
        setValue,
    } = useForm<SignInForm>({ resolver: zodResolver(signInSchema) });

    const onSubmit = async (data: SignInForm) => {
        await startTransition(async () => {
            await new Promise(resolve => setTimeout(resolve, 4000));
            console.log("Authentication successful");
        });
    };
    return (
        <section className="bg-gray-50 dark:bg-gray-900">
            <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
                <div className="w-full bg-white  rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
                    <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                        <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                            ثبت نام کردن
                        </h1>
                        <form className="space-y-4 md:space-y-6" onSubmit={handleSubmit(onSubmit)}>
                            <div>
                                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                                    ایمیل
                                </label>
                                <input
                                    {...register("username")}
                                    type="text"
                                    name="username"
                                    id="email"
                                    className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 outline-none"
                                    placeholder="ایمیل خود را وارد کنید"
                                    autoComplete="email"
                                />
                                {errors.username && <span>{errors.username.message}</span>}
                            </div>
                            <div>
                                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                                    رمز
                                </label>
                                <input
                                    type="password"
                                    {...register("password")}
                                    name="password"
                                    id="password"
                                    placeholder="••••••••"
                                    className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 outline-none"
                                    autoComplete="current-password"
                                />
                                {errors.password && <span>{errors.password.message}</span>}
                            </div>
                            <div className="flex items-center justify-between">
                                <div className="flex items-start">
                                    <div className="flex items-center h-5">
                                        <input
                                            id="remember"
                                            aria-describedby="remember"
                                            type="checkbox"
                                            className={`w-4 h-4 ${errors.remember ? "border-gray-300" : "border-red-500"} border  rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800`}
                                            {...register("remember")}
                                        />
                                    </div>
                                    <div className="ml-3 text-sm">
                                        <label
                                            htmlFor="remember"
                                            className={`${errors.remember ? "text-gray-300" : "text-red-500"}  dark:text-gray-300`}
                                        >
                                            رمز به خاطر بسپار
                                        </label>
                                    </div>
                                </div>

                                <a
                                    href="#"
                                    className="text-[10px] font-medium text-primary-600 hover:underline dark:text-primary-500"
                                >
                                    رمز خود را فراموش کرده اید؟
                                </a>
                            </div>
                            <button
                                type="submit"
                                className="w-full text-white bg-blue-500  hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                                disabled={isPending}
                            >
                                {!isPending ? "sign in" : "Loading ..."}
                            </button>

                            <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                                قبلا ثبت نام کرده اید؟{" "}
                                <a
                                    href="#"
                                    className="font-medium text-primary-600 hover:underline dark:text-primary-500"
                                >
                                    وارد شوید
                                </a>
                            </p>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default SignIn;
