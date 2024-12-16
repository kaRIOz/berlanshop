"use client";

import React from "react";

import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useSession } from "next-auth/react";
import Modal from "@/components/modal/Modal";

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
        // formState: { errors },
    } = useForm<UserInfoType>({ resolver: zodResolver(userInfoSchema) });

    const onsubmit = () => {
        console.log("hi");
    };
    return (
        <Modal title="ویرایش اطلاعات">
            <form className="grid grid-cols-2 items-stretch gap-3 p-3" onSubmit={handleSubmit(onsubmit)}>
                <div>
                    <label htmlFor="name" className="text-[14px] font-medium opacity-70">
                        نام و نام خانوادگی
                    </label>
                    <input
                        type="text"
                        id="name"
                        className="w-full border border-blue-500 rounded-lg p-2 outline-none mt-2"
                        {...register("name")}
                    />
                </div>
                <div>
                    <label htmlFor="phoneNumber" className="text-[14px] font-medium opacity-70">
                        شماره تلفن
                    </label>
                    <input
                        type="text"
                        id="phoneNumber"
                        className="w-full border border-blue-500 rounded-lg p-2 outline-none mt-2"
                        {...register("phoneNumber")}
                        defaultValue={data?.user.phoneNumber}
                    />
                </div>
                <div className="flex flex-col col-span-2">
                    <label htmlFor="email" className="text-[14px] font-medium opacity-70">
                        ایمیل
                    </label>
                    <input
                        type="text"
                        id="email"
                        className="w-full border border-blue-500 rounded-lg p-2 outline-none mt-2 "
                        {...register("email")}
                    />
                </div>
                {/* <div>
                    <label htmlFor="password" className="text-[14px] font-medium opacity-70">
                        رمز
                    </label>
                    <input
                        type="text"
                        id="password"
                        className=" outline-gray-200 rounded-lg p-2 outline-none mt-2"
                        {...register("password")}
                    />
                </div> */}
            </form>
        </Modal>
    );
};

export default InterceptedEdit;
