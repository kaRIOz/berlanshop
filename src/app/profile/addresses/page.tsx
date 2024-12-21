"use client";

import React from "react";

import dynamic from "next/dynamic";
import Image from "next/image";

import { MdOutlineAddLocation } from "react-icons/md";
import { HiOutlineDotsVertical } from "react-icons/hi";
import { FaCity, FaRegEnvelope } from "react-icons/fa";
import { FaPhone } from "react-icons/fa6";
import { IoMdPerson } from "react-icons/io";

const Map = dynamic(() => import("../../../components/map/mapContainer"), { ssr: false });

const addresses = [
    {
        id: 1,
        address: "خ جمهوری ، خ حافظ ، ب ب هور ",
        city: "تهران",
        zipCode: "1388964782",
        phoneNumber: "09191234567",
        name: "ایمان",
    },
];

const Addresses = () => {
    return (
        <div className="overflow-hidden">
            <h1 className="border-b mb-2">آدرس ها</h1>
            {!addresses.length ? (
                <div className="w-4/5 mx-auto flex flex-col items-center">
                    <Image
                        className="w-[16vw] min-w-32"
                        src={"/noLocation.png"}
                        alt="address"
                        width={100}
                        height={100}
                    />
                    <p className="font-medium text-meduim">هنوز آدرس ثبت نکرده اید.</p>
                    <button className="flex items-center gap-2 border border-red-500 text-red-500 mt-2 font-normal hover:bg-none rounded-lg px-3 py-2">
                        <MdOutlineAddLocation />
                        <p className="text-regular">ثبت آدرس</p>
                    </button>
                </div>
            ) : (
                <div>
                    {addresses.map(address => (
                        <>
                            <div key={address.id} className="border-b">
                                <div className="flex justify-between items-center my-4">
                                    <h3 className="text-regular lg:text-medium opacity-85">{address.address}</h3>
                                    <HiOutlineDotsVertical />
                                </div>

                                <div className="flex items-center gap-2 mb-1 lg:mb-2">
                                    <FaCity className="opacity-50" />
                                    <p className="text-regular lg:text-medium opacity-50">{address.city}</p>
                                </div>
                                <div className="flex items-center gap-2 mb-1 lg:mb-2">
                                    <FaRegEnvelope className="opacity-50" />
                                    <p className="text-regular lg:text-medium opacity-50">{address.zipCode}</p>
                                </div>
                                <div className="flex items-center gap-2 mb-1 lg:mb-2">
                                    <FaPhone className="opacity-50" />
                                    <p className="text-regular lg:text-medium opacity-50">{address.phoneNumber}</p>
                                </div>
                                <div className="flex items-center gap-2 mb-1 lg:mb-2">
                                    <IoMdPerson className="opacity-50" />
                                    <p className="text-regular lg:text-medium opacity-50">{address.name}</p>
                                </div>
                            </div>

                            <button className="flex items-center gap-2 border border-red-500 text-red-500 mt-2 font-normal hover:bg-none rounded-lg px-3 py-2 mr-auto">
                                <MdOutlineAddLocation />
                                <p className="text-regular"> ثبت آدرس جدید</p>
                            </button>
                        </>
                    ))}
                </div>
            )}
        </div>
    );
};

export default Addresses;
