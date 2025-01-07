"use client";

import { useCartStore } from "@/stores/cart.store";
import React from "react";

import BasketList from "./_components/basketList";

const Basket = () => {
    const totalPrice = useCartStore(state => state.totalPrice);
    const totalItems = useCartStore(state => state.totalItems);
    const tax = totalPrice * 0.09;

    return (
        <div className="lg:grid lg:grid-cols-[1fr_auto] lg:relative ">
            <BasketList />
            {!!totalItems && (
                <div className="h-fit sticky top-24 left-2 border p-2 mt-2 lg:mt-0 bg-gray-50  rounded-lg">
                    <div className="flex items-center justify-between gap-24 py-1">
                        <span className="text-left text-regular text-gray-600">تعداد کالاها</span>
                        <span className="text-hard-blue font-semibold">{totalItems}</span>
                    </div>
                    <div className="flex items-center justify-between gap-24 py-1">
                        <span className="text-left text-regular text-gray-600">جمع سبد خرید</span>
                        <span className="text-hard-blue font-semibold">
                            {totalPrice.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
                        </span>
                    </div>
                    <div className="flex items-center justify-between gap-24 py-1">
                        <span className="text-left text-regular text-gray-600">مالیات</span>
                        <span className="text-hard-blue font-semibold">
                            {tax.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
                        </span>
                    </div>
                    <div className="flex items-center justify-between gap-24 py-1">
                        <span className="text-left text-regular text-gray-600">مبلغ نهایی</span>
                        <span className="text-hard-blue font-semibold">
                            {(tax + totalPrice).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
                        </span>
                    </div>

                    <button className="w-full bg-light-red text-white font-semibold text-medium mx-auto p-2 mt-3  rounded">
                        تایید و تکمیل سفارش
                    </button>
                </div>
            )}
        </div>
    );
};

export default Basket;
