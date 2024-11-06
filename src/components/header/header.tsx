import { FaInstagram } from "react-icons/fa6";
import { LiaTelegram } from "react-icons/lia";
import React from "react";
import Image from "next/image";
export default function Header() {
    return (
        <header className="bg-slate-200 m-auto shadow-sm">
            <div className="w-8/12 m-auto py-4 flex justify-between items-center">
                <div className="flex space-x-4 space-x-reverse">
                    <FaInstagram className="text-lg" />
                    <LiaTelegram className="text-lg" />
                </div>
                <div className="">
                    <Image
                        src="https://img.freepik.com/free-vector/human-organization-logo-style-gradient-design-vector_474888-2130.jpg?semt=ais_hybrid"
                        alt="logo"
                        fill
                        className="w-8 h-8 object-cover"
                    />
                </div>
            </div>
        </header>
    );
}
