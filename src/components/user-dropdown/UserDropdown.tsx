import React from "react";
import Link from "next/link";
import { signOut, useSession } from "next-auth/react";

import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";

import { IoIosArrowBack } from "react-icons/io";
import { IoExitOutline, IoHeartOutline } from "react-icons/io5";
import { CiLocationOn } from "react-icons/ci";
import { BsBasket3 } from "react-icons/bs";
import { FiMessageSquare } from "react-icons/fi";
import { LuUser } from "react-icons/lu";
const UserDropdown = () => {
    const { data } = useSession();

    return (
        <DropdownMenu modal={false}>
            <DropdownMenuTrigger asChild>
                <Button variant="outline" size="icon" className="overflow-hidden rounded-full">
                    <LuUser className="w-5 h-5" />
                </Button>
            </DropdownMenuTrigger>

            <DropdownMenuContent align="start" className="w-44 md:w-56 shadow-none">
                <Link href={"/profile"} className="w-full">
                    <DropdownMenuItem className="flex items-center justify-between p-2 md:p-3 text-[14px] md:text-[16px] cursor-pointer ">
                        <IoIosArrowBack />
                        {data?.user.phoneNumber}
                    </DropdownMenuItem>
                </Link>
                <DropdownMenuSeparator />
                <DropdownMenuItem className="flex items-center justify-end gap-4 p-2 md:p-3 text-[14px] md:text-[16px] ">
                    <Link href={"/profile/favorites"} className="w-full text-right">
                        علاقه مندی ها{" "}
                    </Link>
                    <IoHeartOutline />
                </DropdownMenuItem>
                <DropdownMenuItem className="flex items-center justify-end gap-4 p-2 md:p-3 text-[14px] md:text-[16px] ">
                    <Link href={"/profile/orders"} className="w-full text-right">
                        سفارش ها
                    </Link>
                    <BsBasket3 />
                </DropdownMenuItem>
                <DropdownMenuItem className="flex items-center justify-end gap-4 p-2 md:p-3 text-[14px] md:text-[16px] ">
                    <Link href={"/profile/messages"} className="w-full text-right">
                        پیام ها
                    </Link>
                    <FiMessageSquare />
                </DropdownMenuItem>
                <DropdownMenuItem className="flex items-center justify-end gap-4 p-2 md:p-3 text-[14px] md:text-[16px] ">
                    <Link href={"/profile/addresses"} className="w-full text-right">
                        آدرس ها
                    </Link>
                    <CiLocationOn />
                </DropdownMenuItem>

                <DropdownMenuSeparator />
                <DropdownMenuItem className="flex items-center justify-end gap-4 p-2 md:p-3 text-[14px] md:text-[16px] ">
                    <button className="w-full text-right" onClick={() => signOut({ redirect: false })}>
                        خروج
                    </button>
                    <IoExitOutline />
                </DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>
    );
};

export default UserDropdown;
