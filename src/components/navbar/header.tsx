import React from "react";
import Image from "next/image";
import Link from "next/link";

import burgerMenu from "../../../public/burgerMenu.svg";

// Menu items.
const items: { title: string; url: string }[] = [
    {
        title: "خانه",
        url: "/",
    },
    {
        title: "فروشگاه",
        url: "/shop",
    },
    {
        title: "جستجو",
        url: "#",
    },
    {
        title: "پروفایل",
        url: "/dashboard",
    },
];
export default function Navbar() {
    return (
        <aside className="bg-slate-100 bg-red m-auto shadow-sm">
            <div className="sidebar">
                <div className="nav-header flex justify-between items-center p-4">
                    <button>
                        <Image
                            src={burgerMenu}
                            alt="burger-menu"
                            width={30}
                            height={30}
                            className="cursor-pointer  hover:scale-105 transition-all ease-in-out"
                        />
                    </button>
                    <img
                        src="https://img.freepik.com/free-vector/human-organization-logo-style-gradient-design-vector_474888-2130.jpg?semt=ais_hybrid"
                        className="w-8 h-8"
                        alt="logo"
                    />
                </div>
                <div className="links-container  h-screen ">
                    <ul className="links">
                        {items.map(({ title, url }, index) => (
                            <li key={index}>
                                <Link href={url}>{title}</Link>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </aside>
    );
}
