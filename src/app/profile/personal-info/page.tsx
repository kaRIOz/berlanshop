"use client";
import React from "react";
import { useSession } from "next-auth/react";

import { FaRegEdit } from "react-icons/fa";
import Link from "next/link";

const PersonalInfo = () => {
    const { data } = useSession();
    return (
        <div>
            <div className="flex flex-col lg:grid grid-cols-2">
                <div>
                    <div className="p-2">
                        <h1 className="opacity-40 font-medium text-[16px]">نام و نام خانوادگی</h1>
                        <p className="opacity-70 mt-1">ایمان جعفری</p>
                    </div>
                </div>
                <div>
                    <div className="p-2">
                        <h1 className="opacity-40 font-medium text-[16px]">شماره موبایل</h1>
                        <p className="opacity-70 mt-1">{data?.user.phoneNumber}</p>
                    </div>
                </div>
                <div>
                    <div className="p-2">
                        <h1 className="opacity-40 font-medium text-[16px]">ایمیل</h1>
                        <p className="opacity-70 mt-1">imancx.cx@gmail.com</p>
                    </div>
                </div>
                <div>
                    <div className="p-2">
                        <h1 className="opacity-40 font-medium text-[16px]">رمز عبور</h1>
                        <p className="opacity-70 mt-1">*******</p>
                    </div>
                </div>
            </div>
            <Link href="personal-info/edit">
                <button className="p-2 mr-auto block">
                    <FaRegEdit className=" text-sky-500 text-xl" />
                </button>
            </Link>
        </div>
    );
};

export default PersonalInfo;
