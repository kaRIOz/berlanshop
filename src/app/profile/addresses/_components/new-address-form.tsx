import React from "react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
import { Separator } from "@/components/ui/separator";
import { useSession } from "next-auth/react";

import { FaArrowRight } from "react-icons/fa6";

type UserAddress = {
    state?: string;
    city?: string;
    formatted_address?: string;
    setMapStep: boolean;
};

const NewAddressForm = ({ city, formatted_address: addressDetails, state, setMapStep }: UserAddress) => {
    const { data } = useSession();

    return (
        <form className="flex flex-col p-3">
            <div className=" border-b flex items-center px-3 pb-2 -mt-8 gap-3">
                <FaArrowRight onClick={() => setMapStep(false)} className="cursor-pointer" />
                <h1>جزییات آدرس</h1>
            </div>
            <h1>{state}</h1>

            <div className="my-4 grid grid-cols-2 gap-2">
                <div className="col-span-2">
                    <Textarea
                        value={addressDetails}
                        className="w-full focus-visible:ring-0 focus-visible:ring-offset-0  focus:border-blue-500 mb-1 placeholder:opacity-60 placeholdertext-regular md:text-medium border-2 max-h-44"
                    />
                </div>
                <div>
                    <Select>
                        <SelectTrigger className="w-full">
                            <SelectValue placeholder="استان" />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectGroup>
                                <SelectItem value="apple">Apple</SelectItem>
                                <SelectItem value="banana">Banana</SelectItem>
                                <SelectItem value="blueberry">Blueberry</SelectItem>
                                <SelectItem value="grapes">Grapes</SelectItem>
                                <SelectItem value="pineapple">Pineapple</SelectItem>
                            </SelectGroup>
                        </SelectContent>
                    </Select>
                </div>
                <div>
                    <Select>
                        <SelectTrigger className="w-full">
                            <SelectValue placeholder="شهر" />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectGroup>
                                <SelectItem value="apple">Apple</SelectItem>
                                <SelectItem value="banana">Banana</SelectItem>
                                <SelectItem value="blueberry">Blueberry</SelectItem>
                                <SelectItem value="grapes">Grapes</SelectItem>
                                <SelectItem value="pineapple">Pineapple</SelectItem>
                            </SelectGroup>
                        </SelectContent>
                    </Select>
                </div>
                <div>
                    <label htmlFor="" className="font-medium mr-4 opacity-80  text-regular lg:text-base">
                        کد پستی
                    </label>
                    <Input
                        type="text"
                        className="w-full focus-visible:ring-0 focus-visible:ring-offset-0  focus:border-blue-500 mb-1 placeholder:opacity-60 placeholder:text-regular md:text-medium border-2 "
                    />
                </div>
            </div>
            <Separator />
            <div className="mt-4">
                <h2 className="px-3 mb-2">مشخصات شخص گیرنده</h2>
                <div className="grid grid-cols-2 gap-2 ">
                    <div className="flex flex-col space-y-2">
                        <label htmlFor="" className="font-medium mr-4 opacity-80 text-regular lg:text-base	">
                            نام گیرنده
                        </label>
                        <Input
                            type="text"
                            className="w-full focus-visible:ring-0 focus-visible:ring-offset-0  focus:border-blue-500 mb-1 placeholder:opacity-60 placeholder:text-regular md:text-medium border-2  text-regular lg:text-base"
                        />
                    </div>
                    <div className="flex flex-col space-y-2">
                        <label htmlFor="" className="font-medium mr-4 opacity-80 text-regular lg:text-base">
                            نام خانوادگی گیرنده
                        </label>
                        <Input
                            type="text"
                            className="w-full focus-visible:ring-0 focus-visible:ring-offset-0  focus:border-blue-500 mb-1 placeholder:opacity-60 placeholder:text-regular md:text-medium border-2"
                        />
                    </div>
                    <div className="flex flex-col space-y-2">
                        <label htmlFor="" className="font-medium mr-4 opacity-80  text-regular lg:text-base">
                            شماره موبایل
                        </label>
                        <Input
                            type="text"
                            className="w-full focus-visible:ring-0 focus-visible:ring-offset-0  focus:border-blue-500 mb-1 placeholder:opacity-60 placeholder:text-regular md:text-medium border-2"
                            value={data?.user.phoneNumber}
                        />
                    </div>
                </div>
            </div>

            <button className="p-2 bg-blue-500 rounded-lg text-primary-content mt-3 text-medium">ثبت آدرس</button>
        </form>
    );
};

export default NewAddressForm;
