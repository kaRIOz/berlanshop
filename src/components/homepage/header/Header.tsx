"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

import { motion } from "framer-motion";
import { navBarList } from "$/constants";

import { HiMenuAlt3 } from "react-icons/hi";
import { IoIosArrowBack } from "react-icons/io";
import { IoExitOutline, IoHeartOutline } from "react-icons/io5";
import { CiLocationOn } from "react-icons/ci";
import { TfiShoppingCart } from "react-icons/tfi";

import { BsBasket3 } from "react-icons/bs";
import { FiMessageSquare } from "react-icons/fi";
import { LuUser } from "react-icons/lu";

import { signOut, useSession } from "next-auth/react";
import { Loading } from "@/components/loading";

import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";

import { Button } from "@/components/ui/button";

const Header = () => {
    const { data, status } = useSession();

    const pathname = usePathname();

    return (
        <header className="w-full h-14 md:h-20 bg-primary-content sticky top-0 z-50 shadow-sm ">
            <nav className="h-full px-4 max-w-container mx-auto relative">
                <div className="h-full flex justify-between items-center">
                    <div className="flex flex-row-reverse gap-x-2  md:flex-row items-center ">
                        <Link href="/" className="hidden md:inline-block">
                            <Image src={"/Logo.png"} alt="Logo" width={100} height={50} />
                        </Link>
                        <motion.ul
                            initial={{ y: 10, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ duration: 0.5 }}
                            className="flex items-center  z-50 p-0 gap-2"
                        >
                            {navBarList.map(({ id, title, link }) => (
                                <Link
                                    key={id}
                                    className={`hidden md:flex text-sm hover:font-Regular w-22 h-6 justify-center items-center px-4 ${pathname === link ? "text-[#262626] " : "text-[#767676] "}  hover:text-[#262626]`}
                                    href={link}
                                >
                                    <li>{title}</li>
                                </Link>
                            ))}
                        </motion.ul>
                    </div>

                    <div className="flex justify-between items-center space-x-5 space-x-reverse">
                        {status === "unauthenticated" && (
                            <Link href={"/otp"} className="text-[10px] md:text-[13px] md:w-full md:h-full ">
                                <Button className="px-2 py-1 md:py-2 rounded-lg bg-transparent" variant="outline">
                                    ورود | ثبت نام
                                </Button>
                            </Link>
                        )}
                        {status === "loading" && <Loading />}
                        {status === "authenticated" && (
                            <div className="flex items-center gap-1 md:gap-4">
                                <DropdownMenu modal={false}>
                                    <DropdownMenuTrigger asChild>
                                        <Button variant="outline" size="icon" className="overflow-hidden rounded-full">
                                            <LuUser className="w-5 h-5" />
                                        </Button>
                                    </DropdownMenuTrigger>

                                    <DropdownMenuContent align="start" className="w-56 shadow-none">
                                        <DropdownMenuItem className="flex items-center justify-between p-3">
                                            <IoIosArrowBack />
                                            <Link href={"/profile"}>{data.user.phoneNumber}</Link>
                                        </DropdownMenuItem>
                                        <DropdownMenuSeparator />
                                        <DropdownMenuItem className="flex items-center justify-end gap-4 p-3">
                                            <Link href={"/profile/favorites"} className="w-full text-right">
                                                علاقه مندی ها{" "}
                                            </Link>
                                            <IoHeartOutline />
                                        </DropdownMenuItem>
                                        <DropdownMenuItem className="flex items-center justify-end gap-4 p-3">
                                            <Link href={"/profile/orders"} className="w-full text-right">
                                                سفارش ها
                                            </Link>
                                            <BsBasket3 />
                                        </DropdownMenuItem>
                                        <DropdownMenuItem className="flex items-center justify-end gap-4 p-3">
                                            <Link href={"/profile/messages"} className="w-full text-right">
                                                پیام ها
                                            </Link>
                                            <FiMessageSquare />
                                        </DropdownMenuItem>
                                        <DropdownMenuItem className="flex items-center justify-end gap-4 p-3">
                                            <Link href={"/profile/addresses"} className="w-full text-right">
                                                آدرس ها
                                            </Link>
                                            <CiLocationOn />
                                        </DropdownMenuItem>

                                        <DropdownMenuSeparator />
                                        <DropdownMenuItem className="flex items-center justify-end gap-4 p-3">
                                            <button
                                                className="w-full text-right"
                                                onClick={() => signOut({ redirect: false })}
                                            >
                                                خروج
                                            </button>
                                            <IoExitOutline />
                                        </DropdownMenuItem>
                                    </DropdownMenuContent>
                                </DropdownMenu>
                                <Button
                                    variant="outline"
                                    className="border-none bg-transparent shadow-none hover:border rounded-full"
                                >
                                    <Link href={"/profile/basket"}>
                                        <TfiShoppingCart className="text-[20px]" />
                                    </Link>
                                </Button>
                            </div>
                        )}
                    </div>
                </div>
                <Sheet modal={false}>
                    <SheetTrigger
                        asChild
                        className="border-none shadow-none bg-transparent absolute top-3 right-8 md:hidden"
                    >
                        <Button variant={"outline"}>
                            <HiMenuAlt3 className="inline-block md:hidden cursor-pointer" />
                        </Button>
                    </SheetTrigger>
                    <SheetContent className="w-[50%] md:w-[40px]">
                        <SheetHeader>
                            <SheetTitle>
                                <Image
                                    src={"/Logo.png"}
                                    alt="Logo"
                                    width={60}
                                    height={50}
                                    className="mb-8 block mx-auto"
                                />
                            </SheetTitle>
                        </SheetHeader>

                        <div className="">
                            <ul className="flex flex-col pt-2">
                                {navBarList.map(item => (
                                    <li
                                        key={item.id}
                                        className="p-3 text-[9px] md:text-[13px] font-normal hover:pr-6 transition-all border-b"
                                    >
                                        <Link href={item.link} className="w-full">
                                            {item.title}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </SheetContent>
                </Sheet>
            </nav>
        </header>
    );
};

export default Header;
