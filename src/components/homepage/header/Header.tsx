"use client";

import React, { useEffect, useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useSession } from "next-auth/react";

import MobileSidebar from "@/components/mobile-sidebar/MobileSidebar";
import UserDropdown from "@/components/user-dropdown/UserDropdown";
import { Loading } from "@/components/loading";
import UserBasketHover from "@/components/user-basket-hover/UserBasketHover";

import { Button } from "@/components/ui/button";

import { navBarList } from "$/constants";

const Header = () => {
    const [showNavbar, setShowNavbar] = useState(true);
    const { data, status } = useSession();
    const pathname = usePathname();

    useEffect(() => {
        let lastScrollY = window.scrollY;

        const controllNavbar = () => {
            const currentScrollY = window.scrollY;
            if (currentScrollY > lastScrollY && currentScrollY > 100) {
                setShowNavbar(false);
            } else {
                setShowNavbar(true);
            }

            lastScrollY = currentScrollY;
        };

        window.addEventListener("scroll", controllNavbar);

        return () => window.removeEventListener("scroll", controllNavbar);
    });

    return (
        <header
            className={`sticky top-0 w-full transition-transform duration-300 ${showNavbar ? "translate-y-0" : "-translate-y-full"} ${pathname === "otp" && "otp-verify" ? " z-[1001] " : "z-30"}`}
        >
            <nav className="w-full md:h-full relative bg-primary-content px-[4.6%] py-2">
                <div className="max-w-container mx-auto h-full flex justify-between items-center">
                    <div className="flex flex-row-reverse gap-x-2  md:flex-row items-center ">
                        <Link href="/" className="hidden md:inline-block">
                            <Image src={"/Logo.png"} alt="Logo" width={90} height={50} />
                        </Link>
                    </div>

                    <div className="flex justify-between items-center space-x-5 space-x-reverse">
                        {status === "unauthenticated" && (
                            <Link href={"/otp"} className="text-small md:text-[13px] md:w-full md:h-full ">
                                <Button
                                    className="text-primary-main px-2 py-1 md:py-2 rounded bg-transparent shadow-none border-primary-main hover:bg-transparent hover:text-primary-main font-medium lg:font-semibold"
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

            <div className="px-[4.6%] py-2 hidden lg:flex lg:items-center lg:justify-start bg-[#262626]">
                <ul className="flex items-center  z-50 p-0 gap-2">
                    {navBarList.map(({ id, title, link }) => (
                        <Link
                            key={id}
                            className={`hidden md:flex text-sm hover:font-Regular w-22 h-6 justify-center items-center px-4 text-primary-content hover:text-[#DB2777]`}
                            href={link}
                        >
                            <li>{title}</li>
                        </Link>
                    ))}
                </ul>
            </div>
        </header>
    );
};

export default Header;
