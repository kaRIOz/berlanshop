"use client";

import React, { useTransition } from "react";
import Link from "next/link";

// import use-form
import { useForm, UseFormHandleSubmit } from "react-hook-form";
//import zod
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

const signUpSchema = z.object({
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
        })
        .regex(/^(?=.*[a-zA-Z]).{1,}$/, {
            message: "حداقل شامل یک حرف باشد",
        })
        .regex(/^(?=.*\d).{1,}$/, {
            message: "حداقل شامل یک رقم باشد",
        })
        .regex(/^(?=.*[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>/?]).{1,}$/, {
            message: "حداقل شامل یک کارکتر باشد",
        }),

    remember: z.boolean().default(false),
});

type SignUpForm = z.infer<typeof signUpSchema>;

const SignUp = () => {
    const [isPending, startTransition] = useTransition();
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<SignUpForm>({ resolver: zodResolver(signUpSchema) });

    const onSubmit = async (data: SignUpForm) => {
        await startTransition(async () => {
            await new Promise(resolve => setTimeout(resolve, 4000));
            console.log("Authentication successful");
        });
    };
    return (
        <section className="">
            <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
                <div className="w-full bg-white  rounded-lg shadow  md:mt-0 sm:max-w-md xl:p-0">
                    <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                        <h1 className="text-xl font-bold leading-tight tracking-tight md:text-2xl ">ثبت نام</h1>
                        <form className="space-y-4 md:space-y-6" onSubmit={handleSubmit(onSubmit)}>
                            <div>
                                <label className="block mb-2 text-sm font-medium ">ایمیل</label>
                                <input
                                    {...register("username")}
                                    type="text"
                                    name="username"
                                    id="email"
                                    className="bg-gray-50 border border-gray-300 rounded-lg  focus:border-blue-500 block w-full p-2.5  outline-none placeholder:text-sm"
                                    placeholder="ایمیل خود را وارد کنید"
                                    autoComplete="email"
                                />
                                {errors.username && (
                                    <span className="text-[11px] text-red-500">{errors.username.message}</span>
                                )}
                            </div>
                            <div>
                                <label className="block mb-2 text-sm font-medium">رمز</label>
                                <input
                                    type="password"
                                    {...register("password")}
                                    name="password"
                                    id="password"
                                    placeholder="••••••••"
                                    className="bg-gray-50 border border-gray-300  rounded-lg  focus:border-blue-500 block w-full p-2.5  outline-none"
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
                                            {...register("remember")}
                                        />
                                    </div>
                                    <div className="ml-3 text-sm">
                                        <label htmlFor="remember" className={`text-black mr-2 text-[11px]`}>
                                            رمز را به خاطر بسپار
                                        </label>
                                    </div>
                                </div>
                            </div>
                            <button
                                type="submit"
                                className="w-full text-white bg-blue-500  hover:bg-blue-600 focus:outline-none  font-medium rounded-lg text-sm px-5 py-2.5 text-center"
                                disabled={isPending}
                            >
                                {!isPending ? (
                                    "ثبت نام"
                                ) : (
                                    <div role="status">
                                        <svg
                                            aria-hidden="true"
                                            className="w-5 h-5 text-gray-200 animate-spin fill-blue-500 mx-auto"
                                            viewBox="0 0 100 101"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path
                                                d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                                                fill="currentColor"
                                            />
                                            <path
                                                d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                                                fill="currentFill"
                                            />
                                        </svg>
                                    </div>
                                )}
                            </button>

                            <p className="text-sm font-light text-gray-500">
                                قبلا ثبت نام کرده اید؟{" "}
                                <Link href={"/sign-in"} className="font-medium  hover:underline ">
                                    وارد شوید
                                </Link>
                            </p>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default SignUp;
