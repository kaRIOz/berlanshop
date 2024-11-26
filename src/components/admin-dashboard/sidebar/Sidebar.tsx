"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";

import { menuItems } from "$/constance";

const Sidebar = () => {
    const pathname = usePathname();

    return (
        <div className="p-4 bg-white shadow-lg h-screen">
            <div className="flex items-center gap-5 pr-5">
                <Image
                    src="https://img.freepik.com/premium-vector/set-web-user-avatars-anonymous-person-silhouette-social-profile-icon-vector-illustration_515038-3787.jpg?semt=ais_hybrid"
                    alt="profile-logo"
                    width={50}
                    height={50}
                />
                <div className="flex flex-col">
                    <span>ایمان</span>
                    <span className="text-[11px] text-gray-400">ادمین</span>
                </div>
            </div>
            <ul>
                {menuItems.map((item, index) => (
                    <li
                        key={index}
                        className={`flex items-center mt-1 gap-[10px] p-3 rounded-2xl hover:bg-gray-50 text-[13px] ${pathname === item.path && "bg-gray-50"}`}
                    >
                        <item.icon />
                        <Link href={item.path}>{item.title}</Link>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Sidebar;
