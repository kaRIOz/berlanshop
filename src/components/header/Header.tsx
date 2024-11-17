"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";

import Logo from "../../../public/Logo.png";

import { motion } from "motion/react";
import { navBarList } from "$/constance";

// icons
import { HiMenuAlt3 } from "react-icons/hi";
import { IoMdCloseCircleOutline } from "react-icons/io";

const Header = () => {
    const [sidenav, setSidenav] = useState(false);

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
                                        className="hidden md:flex text-sm hover:font-Regular w-22 h-6 justify-center items-center px-4  text-[#767676] hover:text-[#262626]"
                                        href={link}
                                    >
                                        <li>{title}</li>
                                    </Link>
                                ))}
                            </>
                        </motion.ul>
                    </div>

                    <Link href="/">
                        <Image src={Logo} alt="Logo" width={100} />
                    </Link>

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
                                        <Image src={Logo} alt="Logo" width={80} />
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
