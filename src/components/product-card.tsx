"use client";

import React from "react";
import Image from "next/image";
import { useBasketStore } from "@/store/basket.store";

type Props = {
    id: number;
    name: string;
    description: string;
    thumbnail: string | null;
    SKU: string;
    price: string;
    category: {
        nameFa: string;
    };
};

const ProductCard = ({ id, name, description, thumbnail, SKU, price }: Props) => {
    const addItem = useBasketStore(state => state.addItem);
    const basket = useBasketStore(state => state.basket);
    const totalPrice = useBasketStore(state => state.totalPrice);
    console.log({ basket, totalPrice });

    return (
        <div className="w-64  hover:shadow-md transition-all ease-in-out ">
            <Image width={200} height={200} src={thumbnail ?? ""} alt={name} className="w-full h-80 object-cover" />
            <div className="flex flex-col p-2">
                <h2 className="font-medium">{name}</h2>
                <p className="text-[11px] font-light text-gray-400">{description} </p>
                <div className="flex justify-between items-center mt-2">
                    <button
                        className="text-[10px] bg-blue-500 p-2 rounded text-white"
                        onClick={() =>
                            addItem({
                                id: id,
                                name: name,
                                description: description,
                                thumbnail: thumbnail ?? "",
                                price: price,
                            })
                        }
                    >
                        اضافه کردن به سبد خرید
                    </button>
                    <p className="">{price}</p>
                </div>
            </div>
        </div>
    );
};

export default ProductCard;
