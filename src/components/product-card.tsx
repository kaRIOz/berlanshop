"use client";

import React from "react";
import Image from "next/image";
import { useCartStore } from "@/stores/cart.store";
import { addToFavorite, removeFromFavorite } from "@/app/shop/actions";
import { FaPlus, FaMinus } from "react-icons/fa6";
import { RiDeleteBin5Line } from "react-icons/ri";
import { FcLike } from "react-icons/fc";
import { PiHeartFill } from "react-icons/pi";

import { Card, CardContent, CardFooter } from "@/components/ui/card";

type Props = {
    product: {
        id: number;
        name: string;
        thumbnail: string;
        description: string;
        price: string;
        isFavorite: unknown;
    };
};

const ProductCard = ({ product }: Props) => {
    const { id, name, description, price, thumbnail, isFavorite } = product;
    const addToCart = useCartStore(state => state.addToCart);
    const updateQty = useCartStore(state => state.updateQty);
    const cart = useCartStore(state => state.cart);
    const isInBasket = cart.some(item => item.id === id);

    return (
        <Card className="rounded-none broder  p-2">
            <CardContent className="w-full relative p-0 group">
                <Image width={200} height={200} src={thumbnail} alt={name} className="w-full object-cover relative " />
                <div
                    onClick={() => (isFavorite ? removeFromFavorite(id) : addToFavorite(id))}
                    className="absolute cursor-pointer top-4 left-4"
                >
                    {isFavorite ? <FcLike /> : <PiHeartFill className="text-primary-content" />}
                </div>

                <div className="p-2">
                    <h2 className="text-[14px]">{name}</h2>
                    <p className="text-[10px] opacity-30">{description}</p>
                    <p className="font-medium text-left mt-4 text-[14px] md:text-[16px]">
                        {price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
                    </p>
                    <CardFooter className="flex justify-between items-center p-0 md:pb-0 pt-3 mt-1 md:mt-3">
                        {!isInBasket ? (
                            <button
                                className="w-full text-[10px] bg-blue-500 p-1 md:p-2 rounded text-primary-content before:ease relative overflow-hidden shadow-2xl transition-all before:absolute before:right-0 before:top-0 before:h-12 before:w-6 before:translate-x-12 before:rotate-6 before:bg-white before:opacity-20 before:duration-700 group-hover:before:-translate-x-40"
                                onClick={() => {
                                    addToCart({
                                        id: id,
                                        title: name,
                                        description: description,
                                        thumbnail: thumbnail ?? "",
                                        price: Number(price),
                                    });
                                }}
                            >
                                اضافه کردن به سبد خرید
                            </button>
                        ) : (
                            cart
                                .filter(item => item.id === id)
                                ?.map(item => (
                                    <div className="w-full flex justify-center items-center gap-x-2 " key={item.id}>
                                        <button
                                            onClick={() => updateQty("increment", item.id)}
                                            className="rounded-lg  p-2 bg-primary-content shadow"
                                        >
                                            <FaPlus className="text-emerald-500 text-[13px] " />
                                        </button>
                                        <span className="mx-2">{item.quantity}</span>

                                        <button
                                            onClick={() => updateQty("decrement", item.id)}
                                            className=" rounded-lg p-2 bg-primary-content shadow"
                                        >
                                            {(item.quantity as number) > 1 ? (
                                                <FaMinus className="text-red-500 text-[13px]" />
                                            ) : (
                                                <RiDeleteBin5Line className="text-red-500" />
                                            )}
                                        </button>
                                    </div>
                                ))
                        )}
                    </CardFooter>
                </div>
            </CardContent>
        </Card>
    );
};

export default ProductCard;
