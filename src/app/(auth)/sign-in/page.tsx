"use client";

import Link from "next/link";
import React from "react";

import { useForm } from "react-hook-form";

import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

const SignIn = () => {
    const signInSchema = z.object({
        username: z.string(),
        password: z.string(),
        remember: z.boolean().default(false),
    });

    type signInform = z.infer<typeof signInSchema>;

    const { register, handleSubmit } = useForm<signInform>({ resolver: zodResolver(signInSchema) });

    const onSubmit = () => {
        console.log("user is login");
    };

    return (
        <section className="bg-gray-50 dark:bg-gray-900">
            <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
                <div className="w-full bg-white  rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
                    <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                        <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                            ورود
                        </h1>
                        <form className="space-y-4 md:space-y-6" onSubmit={handleSubmit(onSubmit)}>
                            <div>
                                <label className="block mb-2 text-sm font-medium ">ایمیل</label>
                                <input
                                    {...register("username")}
                                    type="text"
                                    name="username"
                                    id="email"
                                    className="bg-gray-50 border border-gray-300 rounded-lg  focus:border-red-500 block w-full p-2.5  outline-none placeholder:text-sm"
                                    placeholder="ایمیل خود را وارد کنید"
                                    autoComplete="email"
                                />
                                {/* {errors.username && (
                                    <span className="text-[11px] text-red-500">{errors.username.message}</span>
                                )} */}
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
                                {/* {errors.password && <span>{errors.password.message}</span>} */}
                            </div>
                            <div className="flex items-center justify-between">
                                <div className="flex items-start">
                                    <div className="flex items-center h-5">
                                        <input
                                            id="remember"
                                            aria-describedby="remember"
                                            type="checkbox"
                                            className={`w-3 h-3  border  rounded bg-gray-50  focus:ring-blue-300`}
                                            {...register("remember")}
                                        />
                                    </div>
                                    <div className="ml-3 text-sm">
                                        <label htmlFor="remember" className={`text-black mr-2 text-[11px]`}>
                                            رمز را به خاطر بسپار
                                        </label>
                                    </div>
                                </div>

                                <Link
                                    href={"/forgot-password"}
                                    className="text-[10px] font-medium text-primary-600 hover:underline dark:text-primary-500"
                                >
                                    رمز خود را فراموش کرده اید؟
                                </Link>
                            </div>
                            <button
                                type="submit"
                                className="w-full text-white bg-blue-500  hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                            >
                                ورود
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default SignIn;
