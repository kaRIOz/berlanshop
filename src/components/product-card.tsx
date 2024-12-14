"use client";

import React from "react";
import Image from "next/image";
import { useBasketStore } from "@/stores/basket.store";

type Props = {
    product: {
        id: number;
        name: string;
        description: string;
        thumbnail: string;
        SKU: string;
        price: string;
        category: {
            nameFa: string;
        } | null;
    };
};

const ProductCard = ({ product }: Props) => {
    const addItem = useBasketStore(state => state.addItem);
    const basket = useBasketStore(state => state.basket);
    const totalPrice = useBasketStore(state => state.totalPrice);
    console.log({ basket, totalPrice });

    return (
        <div className="w-64  hover:shadow-md transition-all ease-in-out ">
            <Image
                width={200}
                height={200}
                src={product.thumbnail}
                alt={product.name}
                className="w-full h-80 object-cover"
            />
            <div className="flex flex-col p-2">
                <h2 className="font-medium">{product.name}</h2>
                <p className="text-[11px] font-light text-gray-400">{product.description} </p>
                <div className="flex justify-between items-center mt-2">
                    <button
                        className="text-[10px] bg-blue-500 p-2 rounded text-white"
                        onClick={() =>
                            addItem({
                                id: product.id,
                                title: product.name,
                                description: product.description,
                                thumbnail: product.thumbnail ?? "",
                                price: Number(product.price),
                            })
                        }
                    >
                        اضافه کردن به سبد خرید
                    </button>
                    <p className="">{product.price}</p>
                </div>
            </div>
        </div>
    );
};

export default ProductCard;
