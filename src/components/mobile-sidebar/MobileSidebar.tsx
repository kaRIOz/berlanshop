import React from "react";
import Image from "next/image";
import Link from "next/link";

import { navBarList } from "$/constants";

import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

import { Button } from "@/components/ui/button";
import { HiMenuAlt3 } from "react-icons/hi";
const MobileSidebar = () => {
    return (
        <Sheet modal={false}>
            <SheetTrigger asChild className="border-none shadow-none bg-transparent absolute top-3 right-8 md:hidden">
                <button className="pt-0 pb-4 pr-0">
                    <HiMenuAlt3 className="inline-block md:hidden cursor-pointer text-2xl" />
                </button>
            </SheetTrigger>

            <SheetContent className="w-[85%] h-full md:w-[40px] z-[1002] px-2">
                <SheetHeader>
                    <SheetTitle>
                        <Image src={"/Logo.png"} alt="Logo" width={100} height={50} className="mb-4 block mx-auto" />
                    </SheetTitle>
                </SheetHeader>
                <Tabs defaultValue="menu" dir="rtl" className="">
                    <TabsList className="grid w-full grid-cols-2">
                        <TabsTrigger value="categories">دسته بندی ها</TabsTrigger>
                        <TabsTrigger value="menu">منو</TabsTrigger>
                    </TabsList>
                    <TabsContent value="menu">
                        <div className="">
                            <ul className="flex flex-col pt-2">
                                {navBarList.map(item => (
                                    <li key={item.id} className="p-3 text-regular font-normal border-b">
                                        <Link href={item.link} className="w-full">
                                            {item.title}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </TabsContent>
                    <TabsContent value="categories">
                        <div className="grid grid-cols-2 gap-2 pt-6">
                            <div className="border border-[#e5e5e5]-100 rounded overflow-hidden">
                                <div className="flex border-spacing-px flex-col items-center justify-center gap-1 bg-primary-content py-2.5 shadow-sm text-black">
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit
                                </div>
                            </div>
                            <div className="border border-[#e5e5e5]-100 rounded overflow-hidden">
                                <div className="flex border-spacing-px flex-col items-center justify-center gap-1 bg-primary-content py-2.5 shadow-sm text-black">
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit
                                </div>
                            </div>
                            <div className="border border-[#e5e5e5]-100 rounded overflow-hidden">
                                <div className="flex border-spacing-px flex-col items-center justify-center gap-1  bg-primary-content py-2.5 shadow-sm text-black">
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit
                                </div>
                            </div>
                            <div className="border border-[#e5e5e5]-100 rounded overflow-hidden">
                                <div className="flex border-spacing-px flex-col items-center justify-center gap-1  bg-primary-content py-2.5 shadow-sm text-black">
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit
                                </div>
                            </div>
                        </div>
                    </TabsContent>
                </Tabs>
            </SheetContent>
        </Sheet>
    );
};

export default MobileSidebar;
