import React from "react";
import Link from "next/link";

import { HiOutlineDotsVertical } from "react-icons/hi";
import { FaCity, FaRegEnvelope } from "react-icons/fa";
import { FaPhone } from "react-icons/fa6";
import { MdOutlineAddLocation } from "react-icons/md";
import { IoMdPerson } from "react-icons/io";

type Addresse = {
    id: number;
    address: string;
    city: string;
    No: string;
    Unit: string;
    zipCode: string;
    phoneNumber: string;
    name: string;
};

const addresses: Addresse[] = [
    {
        id: 1,
        address: "خ جمهوری ، خ حافظ ، ب ب هور ",
        city: "تهران",
        No: "64",
        Unit: "1",
        zipCode: "1388964782",
        phoneNumber: "09191234567",
        name: "ایمان",
    },
];

const AddressList = () => {
    return (
        <div>
            {addresses.map(address => (
                <div key={address.id}>
                    <div className="border-b">
                        <div className="flex justify-between items-center my-4">
                            <h3 className="text-regular lg:text-medium opacity-85">
                                {address.address} پ : {address.No} ، و : {address.Unit}
                            </h3>
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

                    <Link href="addresses/new-address">
                        <button className="flex items-center gap-2 border border-red-500 text-red-500 mt-2 font-normal hover:bg-none rounded-lg px-3 py-2 mr-auto">
                            <MdOutlineAddLocation />
                            <p className="text-regular"> ثبت آدرس جدید</p>
                        </button>
                    </Link>
                </div>
            ))}
        </div>
    );
};

export default AddressList;
