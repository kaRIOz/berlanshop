"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";

import burgerMenu from "../../../public/burgerMenu.svg";
import close from "../../../public/close.svg";

import "./navbar.css";

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
        title: "درباره ما",
        url: "#",
    },
    {
        title: "پروفایل",
        url: "/dashboard",
    },
];
export default function Navbar() {
    const [show, setShow] = useState(false);

    const toggleLinks = () => {
        setShow(!show);
    };
    return (
        <nav className="bg-slate-100">
            <div className="w-2/3 mx-auto">
                <div className="nav-header flex justify-between items-center p-2">
                    <button className="toggleBtn" onClick={toggleLinks}>
                        <Image
                            src={burgerMenu}
                            alt="burger-menu"
                            width={30}
                            height={30}
                            className="cursor-pointer  hover:scale-105 transition-all ease-in-out"
                        />
                    </button>

                    <div>
                        <ul className={` ${show ? "links" : "links showLinks"}`}>
                            <Image src={close} alt="close-icon" className="closeBtn" onClick={toggleLinks} />
                            {items.map(({ title, url }, index) => (
                                <li key={index} className="text-base font-semibold mr-4">
                                    <Link href={url}>{title}</Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <Image
                        src="https://img.freepik.com/free-vector/human-organization-logo-style-gradient-design-vector_474888-2130.jpg?semt=ais_hybrid"
                        width={50}
                        height={50}
                        alt="logo"
                    />
                </div>
            </div>
        </nav>
    );
}
