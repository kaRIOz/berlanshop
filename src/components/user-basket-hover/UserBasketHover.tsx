import React, { useState } from "react";
import Link from "next/link";

import BasketList from "@/app/profile/basket/_components/basketList";

import { useCartStore } from "@/stores/cart.store";

import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { ScrollArea } from "@/components/ui/scroll-area";

import { TfiShoppingCart } from "react-icons/tfi";

const UserBasketHover = () => {
    const [open, setOpen] = useState<boolean>(false);
    const totalItems = useCartStore(state => state.totalItems);
    const totalPrice = useCartStore(state => state.totalPrice);

    const handleMouseEnter = () => {
        setOpen(true);
    };

    const handleMouseLeave = () => {
        setOpen(false);
    };
    return (
        <Popover open={open} onOpenChange={setOpen}>
            <PopoverTrigger
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
                onClick={e => {
                    e.preventDefault();
                }}
                className="border-none bg-transparent shadow-none hover:border rounded-full relative focus:outline-none"
            >
                <Link href={"/profile/basket"}>
                    {totalItems >= 1 && (
                        <span className="flex items-center justify-center text-[12px] w-[18px] h-[18px] absolute -bottom-3 -right-3 bg-red-500 text-primary-content rounded">
                            {totalItems}
                        </span>
                    )}
                    <TfiShoppingCart className="text-2xl" />
                </Link>
            </PopoverTrigger>
            <PopoverContent
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
                align="end"
                className="hidden md:inline-block w-[400px]"
            >
                <ScrollArea className="[&>[data-radix-scroll-area-viewport]]:max-h-[384px]" dir="rtl">
                    <BasketList />
                    {!!totalItems && (
                        <div className="flex items-center justify-between p-3 mx-2">
                            <div className="flex flex-col gap-6 ">
                                <span className="text-regular text-gray-400">مبلغ قابل پرداخت</span>
                                <span className="font-semibold text-hard-blue">{totalPrice}</span>
                            </div>
                            <div>
                                <button className="bg-light-red p-3 rounded-md text-white text-medium">
                                    ثبت سفارش
                                </button>
                            </div>
                        </div>
                    )}
                </ScrollArea>
            </PopoverContent>
        </Popover>
    );
};

export default UserBasketHover;
