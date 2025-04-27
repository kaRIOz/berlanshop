import AddressList from "./_components/address-list";
import Image from "next/image";
import Link from "next/link";
import { MdOutlineAddLocation } from "react-icons/md";
import React from "react";
import { getUserAddressList } from "./queries";

export type Addresse = {
    id: number;
    fullAddress: string;
    province: string;
    city: string;
    postalCode: string;
};

export default async function Addresses() {
    const addresses = await getUserAddressList();
    return (
        <div className="overflow-hidden">
            <h1 className="border-b pb-2">آدرس ها</h1>
            {addresses && addresses.length === 0 ? (
                <div className="w-4/5 mx-auto flex flex-col items-center">
                    <Image
                        className="w-[16vw] min-w-32"
                        src={"/noLocation.png"}
                        alt="address"
                        width={100}
                        height={100}
                    />
                    <p className="font-medium text-meduim">هنوز آدرس ثبت نکرده اید.</p>

                    <Link href="addresses/new">
                        <button className="flex items-center gap-2 border border-red-500 text-red-500 mt-2 font-normal hover:bg-none rounded-lg px-3 py-2">
                            <MdOutlineAddLocation />
                            <p className="text-regular">ثبت آدرس</p>
                        </button>
                    </Link>
                </div>
            ) : (
                <AddressList addresses={addresses!} />
            )}
        </div>
    );
}
