"use client";
import React, { useActionState, useEffect, useState, useTransition } from "react";
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
import { useForm, Controller, type SubmitHandler } from "react-hook-form";
import { userAddressFormSchema, type AddressFormType } from "./address-form.types";
import { zodResolver } from "@hookform/resolvers/zod";
import { provinces, cities } from "$/constants";
import { addAddress } from "../new/action";
import { Loading } from "@/components/loading";

type UserAddress = {
    state?: string;
    city?: string;
    formatted_address?: string;
    setMapStep: (step: boolean) => void;
};
type City = {
    id: number;
    name: string;
    slug: string;
    province_id: number;
};
const NewAddressForm = ({ city, formatted_address: addressDetails, state, setMapStep }: UserAddress) => {
    //api call args: city ,fullAddress, postalCode ,postalCode
    // const [selectedProvince, setSelectedProvince] = useState<number>(8);
    // const [cities, setCities] = useState<City[]>([]);
    const { data } = useSession();
    const [isPending, startTransition] = useTransition();
    const [formState, action] = useActionState(addAddress, undefined);

    const {
        register,
        formState: { errors },
        handleSubmit,
        control,
    } = useForm<AddressFormType>({ resolver: zodResolver(userAddressFormSchema) });

    const onSubmit: SubmitHandler<AddressFormType> = data => {
        const formData = new FormData();
        formData.append("fullAddress", data.fullAddress);
        formData.append("province", data.province);
        formData.append("city", data.city);
        formData.append("postalCode", data.postalCode);
        startTransition(async () => action(formData));

        console.log(data);
    };

    return (
        <form className="flex flex-col p-3" onSubmit={handleSubmit(onSubmit)}>
            <div className=" border-b flex items-center px-3 pb-2  md:-mt-8 gap-3">
                <FaArrowRight onClick={() => setMapStep(false)} className="cursor-pointer" />
                <h1>جزییات آدرس</h1>
            </div>
            <div className="my-4 grid grid-cols-2 gap-2">
                <div className="col-span-2">
                    <Textarea
                        defaultValue={addressDetails}
                        className="w-full focus-visible:ring-0 focus-visible:ring-offset-0  focus:border-blue-500 mb-1 placeholder:opacity-60 placeholder:text-regular md:text-medium border-2 max-h-44"
                        {...register("fullAddress")}
                        name="fullAddress"
                    />
                    {errors.fullAddress && (
                        <span className="text-small text-red-500">{errors.fullAddress?.message}</span>
                    )}
                </div>
                <div>
                    <Controller
                        control={control}
                        name="province"
                        render={({ field: { value, onChange } }) => (
                            <Select onValueChange={onChange} value={value}>
                                <SelectTrigger className="w-full">
                                    <SelectValue placeholder="استان" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectGroup>
                                        {provinces.map(province => (
                                            <SelectItem key={province.id} value={province.name}>
                                                {province.name}
                                            </SelectItem>
                                        ))}
                                    </SelectGroup>
                                </SelectContent>
                            </Select>
                        )}
                    />
                </div>
                <div>
                    <Controller
                        control={control}
                        name="city"
                        render={({ field: { value, onChange } }) => (
                            <>
                                <Select onValueChange={onChange} value={value}>
                                    <SelectTrigger className="w-full">
                                        <SelectValue placeholder="شهر" />
                                    </SelectTrigger>
                                    <SelectContent>
                                        <SelectGroup>
                                            {cities
                                                .filter(item => item.id === 1)
                                                .map(item => (
                                                    <SelectItem key={item.id} value={item.name}>
                                                        {item.name}
                                                    </SelectItem>
                                                ))}
                                        </SelectGroup>
                                    </SelectContent>
                                </Select>
                                {errors.city && <span className="text-small text-red-500">{errors.city.message}</span>}
                            </>
                        )}
                    />
                </div>
                <div>
                    <label htmlFor="postalCode" className="font-medium mr-4 opacity-80  text-regular lg:text-base">
                        کد پستی
                    </label>
                    <Input
                        type="text"
                        className="w-full focus-visible:ring-0 focus-visible:ring-offset-0  focus:border-blue-500 mb-1 placeholder:opacity-60 placeholder:text-regular md:text-medium border-2 "
                        {...register("postalCode")}
                        name="postalCode"
                    />
                    {errors.postalCode && <span className="text-small text-red-500">{errors.postalCode.message}</span>}
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
                            defaultValue={data?.user.phoneNumber}
                        />
                    </div>
                </div>
            </div>

            <button type="submit" className="p-2 bg-blue-500 rounded-lg text-primary-content mt-3 text-medium">
                {isPending ? <Loading /> : "ثبت آدرس"}
            </button>
        </form>
    );
};

export default NewAddressForm;
