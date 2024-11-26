"use client";
import { usePathname } from "next/navigation";
import React from "react";

import Search from "../search/Search";

import { FaSearch } from "react-icons/fa";
import { MdNotifications, MdOutlineChat, MdPublic } from "react-icons/md";

const Nabvar = ({ placeholder = "جستجو" }) => {
    const pathname = usePathname();

    return (
        <div className="flex justify-between items-center bg-white shadow-[0_5px_30px_-16px_rgba(0,0,0,0.2)] p-2 rounded-lg">
            <div className="flex items-center gap-2">
                <div className="flex items-center gap-2 p-2 rounded-lg bg-gray-50">
                    <FaSearch />
                    <Search placeholder={placeholder} />
                </div>
                <div className="flex items-center gap-5">
                    <MdOutlineChat size={15} />
                    <MdNotifications size={15} />
                    <MdPublic size={15} />
                </div>
            </div>
            <div>{pathname.split("/").pop()}</div>
        </div>
    );
};

export default Nabvar;
