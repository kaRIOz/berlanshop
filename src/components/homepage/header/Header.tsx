"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

import { motion } from "framer-motion";
import { navBarList } from "$/constants";

import { HiMenuAlt3 } from "react-icons/hi";
import { IoMdCloseCircleOutline, IoIosArrowBack } from "react-icons/io";
import { IoPersonOutline, IoExitOutline, IoHeartOutline } from "react-icons/io5";
import { MdArrowDropDown } from "react-icons/md";
import { BsBasket3 } from "react-icons/bs";
import { FiMessageSquare } from "react-icons/fi";

import { useSession } from "next-auth/react";
import { Loading } from "@/components/loading";

import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";

const Header = () => {
    const [sidenav, setSidenav] = useState(false);
    const { data, status } = useSession();

    const pathname = usePathname();

    return (
        <header className="w-full h-20 bg-white sticky top-0 z-50 shadow-sm ">
            <nav className="h-full px-4 max-w-container mx-auto relative">
                <div className="h-full flex justify-between items-center">
                    <div>
                        <motion.ul
                            initial={{ y: 10, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ duration: 0.5 }}
                            className="flex items-center  z-50 p-0 gap-2"
                        >
                            <>
                                {navBarList.map(({ id, title, link }) => (
                                    <Link
                                        key={id}
                                        className={`hidden md:flex text-sm hover:font-Regular w-22 h-6 justify-center items-center px-4 ${pathname === link ? "text-[#262626] " : "text-[#767676] "}  hover:text-[#262626]`}
                                        href={link}
                                    >
                                        <li>{title}</li>
                                    </Link>
                                ))}
                            </>
                        </motion.ul>
                    </div>

                    <div className="flex justify-between items-center space-x-5 space-x-reverse">
                        <Link href="/">
                            <Image src={"/Logo.png"} alt="Logo" width={100} height={50} />
                        </Link>
                        {status === "unauthenticated" && (
                            <button className="border-[1px] px-4 py-2 rounded-lg hover:bg-gray-100 text-[13px]">
                                <Link href={"/otp"} className="w-full h-full">
                                    ورود | ثبت نام
                                </Link>
                            </button>
                        )}
                        {status === "loading" && <Loading />}
                        {status === "authenticated" && (
                            <Popover>
                                <PopoverTrigger className="flex items-center">
                                    <IoPersonOutline className="text-2xl" />
                                    <MdArrowDropDown className="text-lg" />
                                </PopoverTrigger>
                                <PopoverContent className="w-52">
                                    <ul>
                                        <li className=" hover:bg-slate-100 p-5 border-b">
                                            <Link href={"/"}>
                                                <div className=" flex items-center justify-between">
                                                    {data.user.phoneNumber}

                                                    <IoIosArrowBack />
                                                </div>
                                            </Link>
                                        </li>
                                        <li className=" hover:bg-slate-100 p-3 text-[14px] font-light">
                                            <Link href={"/"}>
                                                <div className="  flex items-center gap-4">
                                                    <BsBasket3 />
                                                    سفارش ها
                                                </div>
                                            </Link>
                                        </li>
                                        <li className=" hover:bg-slate-100 p-3 text-[14px] font-light">
                                            <Link href={"/"}>
                                                <div className="  flex items-center gap-4">
                                                    <IoHeartOutline />
                                                    علاقه مندی ها
                                                </div>
                                            </Link>
                                        </li>
                                        <li className=" hover:bg-slate-100 p-3 text-[14px] font-light">
                                            <Link href={"/"}>
                                                <div className="  flex items-center gap-4">
                                                    <FiMessageSquare />
                                                    پیام ها
                                                </div>
                                            </Link>
                                        </li>
                                        <li className=" hover:bg-slate-100 p-3 text-[14px] font-light">
                                            <Link href={"/"}>
                                                <div className=" flex items-center gap-4">
                                                    <IoExitOutline />
                                                    خروج
                                                </div>
                                            </Link>
                                        </li>
                                    </ul>
                                </PopoverContent>
                            </Popover>
                        )}
                    </div>

                    <HiMenuAlt3
                        onClick={() => setSidenav(!sidenav)}
                        className="inline-block md:hidden cursor-pointer absolute top-8 right-4 w-8 h-4"
                    />
                </div>
                {sidenav && (
                    <div className="fixed top-0 left-0 w-full h-screen bg-black text-gray-200 bg-opacity-50 z-50">
                        <motion.div
                            initial={{ x: 600, opacity: 0 }}
                            animate={{ x: 0, opacity: 1 }}
                            transition={{ duration: 0.5 }}
                        >
                            <div className="bg-black w-1/2 h-screen p-6">
                                <div>
                                    <div className="flex justify-between items-center shadow-md border-b-[1px] my-2">
                                        <Image src={"/Logo.png"} alt="Logo" width={80} height={50} />
                                        <IoMdCloseCircleOutline
                                            className="text-2xl"
                                            onClick={() => setSidenav(false)}
                                        />
                                    </div>
                                </div>
                                <ul className="flex flex-col gap-4 pt-2 text-gray-200">
                                    {navBarList.map(item => (
                                        <li
                                            key={item.id}
                                            className="font-normal hover:font-bold  text-lg text-gray-200 "
                                        >
                                            <Link href={item.link} onClick={() => setSidenav(false)}>
                                                {item.title}
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </motion.div>
                    </div>
                )}
            </nav>
        </header>
    );
};

export default Header;
