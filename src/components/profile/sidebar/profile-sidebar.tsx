"use client";

import React from "react";
import Link from "next/link";
import { useSession } from "next-auth/react";

import { RiEditLine } from "react-icons/ri";
import { FaRegHeart } from "react-icons/fa6";
import { BsBasket3 } from "react-icons/bs";
import { CiLocationOn } from "react-icons/ci";
import { FiMessageSquare } from "react-icons/fi";
import { IoExitOutline } from "react-icons/io5";
import { MdPersonOutline, MdKeyboardArrowLeft } from "react-icons/md";

const ProfileSidebar = () => {
    const { data } = useSession();

    return (
        <div className="lg:h-screen lg:max-w-[330px] lg:col-span-2 lg:border border-gray-100 rounded-lg">
            <div className="sticky top-0">
                <div className="flex justify-between items-center py-[14px] mx-[14px] border-b">
                    <div className=" text-[14px]">
                        <p>ایمان</p>
                        <span className="opacity-40 tracking-wide font-medium">{data?.user.phoneNumber}</span>
                    </div>

                    <Link href={"/profile/personal-info"}>
                        <RiEditLine className="text-sky-500 cursor-pointer text-xl" />
                    </Link>
                </div>

                <div className="font-medium text-[14px]">
                    <div className="px-4 hover:bg-[#f5f5f5]">
                        <Link href={"/profile/orders"} className="border-b py-4 flex items-center gap-2 ">
                            <BsBasket3 />
                            <p>سفارش ها</p>
                            <MdKeyboardArrowLeft className="lg:hidden block mr-auto" />
                        </Link>
                    </div>
                    <div className="px-4 hover:bg-[#f5f5f5]">
                        <Link className="border-b py-4 flex items-center gap-2" href={"/profile/favorites"}>
                            <FaRegHeart />
                            <p>علاقه مندی ها</p>
                            <MdKeyboardArrowLeft className="lg:hidden block mr-auto" />
                        </Link>
                    </div>
                    <div className="px-4 hover:bg-[#f5f5f5]">
                        <Link className="border-b py-4 flex items-center gap-2" href={"/profile/addresses"}>
                            <CiLocationOn />
                            <p>آدرس ها</p>
                            <MdKeyboardArrowLeft className="lg:hidden block mr-auto" />
                        </Link>
                    </div>
                    <div className="px-4 hover:bg-[#f5f5f5]">
                        <Link className="border-b py-4 flex items-center gap-2" href={"/profile/messages"}>
                            <FiMessageSquare />
                            <p>پیام ها</p>
                            <MdKeyboardArrowLeft className="lg:hidden block mr-auto" />
                        </Link>
                    </div>
                    <div className="px-4 hover:bg-[#f5f5f5]">
                        <Link className="border-b py-4 flex items-center gap-2" href={"/profile/personal-info"}>
                            <MdPersonOutline />
                            <p>اطلاعات حساب کاربری</p>
                            <MdKeyboardArrowLeft className="lg:hidden block mr-auto" />
                        </Link>
                    </div>
                    <div className="border-b py-4 flex items-center gap-2  px-4">
                        <IoExitOutline />
                        <p>خروج</p>
                        <MdKeyboardArrowLeft className="lg:hidden block mr-auto" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProfileSidebar;
