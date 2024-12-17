"use client";

import { useCartStore } from "@/stores/cart.store";
import Image from "next/image";
import React from "react";

const Basket = () => {
    const cart = useCartStore(state => state.cart);
    const removeFromCart = useCartStore(state => state.removeFromCart);
    const updateQty = useCartStore(state => state.updateQty);
    const totalPrice = useCartStore(state => state.totalPrice);
    const totalItems = useCartStore(state => state.totalItems);
    const tax = totalPrice * 0.09;

    return (
        <>
            <div className="flex flex-col gap-4">
                {!cart.length ? (
                    <h1 className="text-center opacity-50">basket is empty</h1>
                ) : (
                    cart.map(item => (
                        <div
                            key={item.id}
                            className="flex items-center justify-between bg-gray-50 shadow p-3 rounded-3xl"
                        >
                            <div>
                                <Image
                                    src={item.thumbnail}
                                    alt="image"
                                    width={50}
                                    height={50}
                                    className="rounded-full w-9 h-9"
                                />
                            </div>
                            <p className="text-[12px] font-medium">{item.title}</p>
                            <p className="text-[12px]">{item.price}</p>

                            <div className="flex items-center mt-2">
                                <button
                                    onClick={() => updateQty("decrement", item.id)}
                                    className="bg-red-500 px-2 rounded-lg  text-primary-content"
                                >
                                    -
                                </button>
                                <span className="mx-2">{item.quantity}</span>
                                <button
                                    onClick={() => updateQty("increment", item.id)}
                                    className="bg-emerald-500 px-2 rounded-lg text-primary-content"
                                >
                                    +
                                </button>
                            </div>

                            <button onClick={() => removeFromCart(item.id)} className="text-[12px]">
                                حذف
                            </button>
                        </div>
                    ))
                )}
            </div>

            <div className="border p-2 bg-gray-50 shadow rounded-3xl mt-4">
                <h1 className="text-left">total Items : {totalItems}</h1>
                <h1 className="text-left">
                    total price : {totalPrice.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
                </h1>
                <h1 className="text-left">tax : {tax.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</h1>
                <h1 className="text-left">
                    total price wit tax : {(tax + totalPrice).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
                </h1>
            </div>
        </>
    );
};

export default Basket;
