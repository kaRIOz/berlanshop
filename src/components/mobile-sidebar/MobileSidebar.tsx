import React from "react";
import Image from "next/image";
import Link from "next/link";

import { navBarList } from "$/constants";

import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { HiMenuAlt3 } from "react-icons/hi";
const MobileSidebar = () => {
    return (
        <Sheet modal={false}>
            <SheetTrigger asChild className="border-none shadow-none bg-transparent absolute top-3 right-8 md:hidden">
                <Button variant={"ghost"} className="pt-0 pr-0">
                    <HiMenuAlt3 className="inline-block md:hidden cursor-pointer" />
                </Button>
            </SheetTrigger>
            <SheetContent className="w-[50%] md:w-[40px] z-[1002]">
                <SheetHeader>
                    <SheetTitle>
                        <Image src={"/Logo.png"} alt="Logo" width={60} height={50} className="mb-8 block mx-auto" />
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
    );
};

export default MobileSidebar;
