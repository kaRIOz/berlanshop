"use client";

import React, { useActionState, useEffect, useTransition } from "react";
import Link from "next/link";
import { redirect } from "next/navigation";
import { getSession } from "next-auth/react";

import { useForm, type SubmitHandler } from "react-hook-form";

import { zodResolver } from "@hookform/resolvers/zod";

import { singInSchema, type SignInForm } from "./types";

import { Loading } from "@/components/loading";
import { signInAction } from "./actions";

const SignIn = () => {
    const [isPending, startTransition] = useTransition();
    const [formState, action] = useActionState(signInAction, undefined);
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<SignInForm>({ resolver: zodResolver(singInSchema) });

    useEffect(() => {
        if (formState) {
            const fetchSession = async () => await getSession();
            fetchSession();
            redirect("/admin");
        }
    }, [formState]);

    const onSubmit: SubmitHandler<SignInForm> = data => {
        const formData = new FormData();
        formData.append("username", data.username);
        formData.append("password", data.password);

        startTransition(async () => await action(formData));
    };

    return (
        <section className="bg-gray-50 dark:bg-gray-900">
            <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
                <div className="w-full bg-white  rounded-lg shadow md:mt-0 sm:max-w-md xl:p-0 ">
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
                                    className="bg-gray-50 border border-gray-300 rounded-lg  focus:border-blue-500 block w-full p-2.5  outline-none placeholder:text-[12px]"
                                    placeholder="ایمیل خود را وارد کنید"
                                    autoComplete="email"
                                />
                                {errors.username && (
                                    <span className="text-[11px] text-red-500">{errors.username.message}</span>
                                )}
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
                                    className="bg-gray-50 border border-gray-300 rounded-lg  focus:border-blue-500 block w-full p-2.5  outline-none placeholder:text-sm"
                                    autoComplete="current-password"
                                />
                                {errors.password && (
                                    <span className="text-[11px] text-red-500">{errors.password.message}</span>
                                )}
                            </div>
                            <div className="flex items-center justify-between">
                                <div className="flex items-start">
                                    <div className="flex items-center h-5">
                                        <input
                                            id="remember"
                                            aria-describedby="remember"
                                            type="checkbox"
                                            className={`w-3 h-3  border  rounded bg-gray-50  focus:ring-blue-300`}
                                            // {...register("remember")}
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
                                disabled={isPending}
                            >
                                {!isPending ? "ورود" : <Loading />}
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default SignIn;
