import React from "react";
import Link from "next/link";

import { HiOutlineDotsVertical } from "react-icons/hi";
import { FaCity, FaRegEnvelope } from "react-icons/fa";
import { FaPhone } from "react-icons/fa6";
import { MdOutlineAddLocation } from "react-icons/md";
import { IoMdPerson } from "react-icons/io";
import { RiDeleteBin5Line } from "react-icons/ri";
import { FiEdit3 } from "react-icons/fi";

import type { Addresse } from "../page";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { PopoverClose } from "@radix-ui/react-popover";

type Props = {
    addresses: Addresse[];
};

const AddressList = ({ addresses }: Props) => {
    return (
        <div>
            {addresses.map(address => (
                <div key={address.id}>
                    <div className="border-b">
                        <div className="flex justify-between items-center my-4">
                            <h3 className="text-regular lg:text-medium opacity-85">{address.fullAddress}</h3>
                            <Popover>
                                <PopoverTrigger>
                                    <HiOutlineDotsVertical className="cursor-pointer" />
                                </PopoverTrigger>
                                <PopoverContent align="end" className="p-1">
                                    <div className="flex items-center gap-2 p-2 hover:bg-slate-100 cursor-pointer">
                                        <FiEdit3 className="text-sky-500" />
                                        <span className="text-medium font-medium">ویرایش آدرس</span>
                                    </div>
                                    <div className="flex items-center gap-2 p-2 hover:bg-slate-100 cursor-pointer">
                                        <RiDeleteBin5Line className="text-red-500" />
                                        <span className="text-medium font-medium">حذف آدرس</span>
                                    </div>
                                </PopoverContent>
                            </Popover>
                        </div>

                        <div className="flex items-center gap-2 mb-1 lg:mb-2">
                            <FaCity className="opacity-50" />
                            <p className="text-regular lg:text-medium opacity-50">{address.city}</p>
                        </div>
                        <div className="flex items-center gap-2 mb-1 lg:mb-2">
                            <FaRegEnvelope className="opacity-50" />
                            <p className="text-regular lg:text-medium opacity-50">{address.postalCode}</p>
                        </div>
                        <div className="flex items-center gap-2 mb-1 lg:mb-2">
                            <FaPhone className="opacity-50" />
                            {/* <p className="text-regular lg:text-medium opacity-50">{address.phoneNumber}</p> */}
                        </div>
                        <div className="flex items-center gap-2 mb-1 lg:mb-2">
                            <IoMdPerson className="opacity-50" />
                            {/* <p className="text-regular lg:text-medium opacity-50">{address.name}</p> */}
                        </div>
                    </div>
                </div>
            ))}
            <Link href="addresses/new">
                <button className="flex items-center gap-2 border border-red-500 text-red-500 mt-2 font-normal hover:bg-none rounded-lg px-3 py-2 mr-auto">
                    <MdOutlineAddLocation />
                    <p className="text-regular"> ثبت آدرس جدید</p>
                </button>
            </Link>
        </div>
    );
};

export default AddressList;
