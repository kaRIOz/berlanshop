"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useSession } from "next-auth/react";

import MobileSidebar from "@/components/mobile-sidebar/MobileSidebar";
import UserDropdown from "@/components/user-dropdown/UserDropdown";
import { Loading } from "@/components/loading";

import { navBarList } from "$/constants";

import { Button } from "@/components/ui/button";

import UserBasketHover from "@/components/user-basket-hover/UserBasketHover";

const Header = () => {
    const { data, status } = useSession();
    const pathname = usePathname();

    return (
        <header
            className={`w-full md:h-full bg-primary-content sticky top-0 ${pathname === "otp" && "otp-verify" ? " z-[1001] " : "z-30"} shadow-sm `}
        >
            <nav className="px-4 py-2 max-w-container mx-auto relative">
                <div className="h-full flex justify-between items-center">
                    <div className="flex flex-row-reverse gap-x-2  md:flex-row items-center ">
                        <Link href="/" className="hidden md:inline-block">
                            <Image src={"/Logo.png"} alt="Logo" width={100} height={50} />
                        </Link>
                        <ul className="flex items-center  z-50 p-0 gap-2">
                            {navBarList.map(({ id, title, link }) => (
                                <Link
                                    key={id}
                                    className={`hidden md:flex text-sm hover:font-Regular w-22 h-6 justify-center items-center px-4 ${pathname === link ? "text-hard-blue " : "text-[#767676] "}  hover:text-hard-blue`}
                                    href={link}
                                >
                                    <li>{title}</li>
                                </Link>
                            ))}
                        </ul>
                    </div>

                    <div className="flex justify-between items-center space-x-5 space-x-reverse">
                        {status === "unauthenticated" && (
                            <Link href={"/otp"} className="text-small md:text-[13px] md:w-full md:h-full ">
                                <Button
                                    className="text-hard-blue px-2 py-1 md:py-2 rounded-lg bg-transparent"
                                    variant="outline"
                                >
                                    ورود | ثبت نام
                                </Button>
                            </Link>
                        )}
                        {status === "loading" && <Loading />}
                        {status === "authenticated" && (
                            <div className="flex items-center gap-x-4 ">
                                <UserDropdown />
                                <UserBasketHover />
                            </div>
                        )}
                    </div>
                </div>
                <MobileSidebar />
            </nav>
        </header>
    );
};

export default Header;
