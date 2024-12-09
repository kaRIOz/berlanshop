"use client";

import React from "react";
import UserModal from "@/components/profile/sidebar/modal";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useSession } from "next-auth/react";

const userInfoSchema = z.object({
    name: z.string().min(1),
    phoneNumber: z.string().min(1),
    email: z.string().min(1).email(),
    password: z.string().min(1),
});

type UserInfoType = z.infer<typeof userInfoSchema>;

const InterceptedEdit = () => {
    const { data } = useSession();

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<UserInfoType>({ resolver: zodResolver(userInfoSchema) });

    const onsubmit = () => {
        console.log("hi");
    };
    return (
        <UserModal>
            <h1>ویرایش اطلاعات</h1>

            <form className="flex flex-col space-y-4" onSubmit={handleSubmit(onsubmit)}>
                <label htmlFor="name" className="text-[14px] font-medium opacity-70">
                    نام و نام خانوادگی
                </label>
                <input
                    type="text"
                    id="name"
                    className="w-full outline-gray-200 rounded-lg p-2 outline-none"
                    {...register("name")}
                />
                <label htmlFor="phoneNumber" className="text-[14px] font-medium opacity-70">
                    شماره تلفن
                </label>
                <input
                    type="text"
                    id="phoneNumber"
                    className="w-full outline-gray-200 rounded-lg p-2 outline-none"
                    {...register("phoneNumber")}
                    defaultValue={data?.user.phoneNumber}
                />
                <label htmlFor="email" className="text-[14px] font-medium opacity-70">
                    ایمیل
                </label>
                <input
                    type="text"
                    id="email"
                    className="w-full outline-gray-200 rounded-lg p-2 outline-none"
                    {...register("email")}
                />
                <label htmlFor="password" className="text-[14px] font-medium opacity-70">
                    رمز
                </label>
                <input
                    type="text"
                    id="password"
                    className="w-full outline-gray-200 rounded-lg p-2 outline-none"
                    {...register("password")}
                />
            </form>
        </UserModal>
    );
};

export default InterceptedEdit;
