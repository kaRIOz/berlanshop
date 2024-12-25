import React from "react";

import Image from "next/image";

import { MdOutlineAddLocation } from "react-icons/md";

import Link from "next/link";
import AddressList from "./_components/address-list";

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

                    <Link href="addresses/new-address">
                        <button className="flex items-center gap-2 border border-red-500 text-red-500 mt-2 font-normal hover:bg-none rounded-lg px-3 py-2">
                            <MdOutlineAddLocation />
                            <p className="text-regular">ثبت آدرس</p>
                        </button>
                    </Link>
                </div>
            ) : (
                <AddressList />
            )}
        </div>
    );
};

export default Addresses;
