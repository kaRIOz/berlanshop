"use client";

import React from "react";
import Image from "next/image";
import { useCartStore } from "@/stores/cart.store";
import { addToFavorite, removeFromFavorite } from "@/app/shop/actions";
import { MdDelete } from "react-icons/md";
import { FcLikePlaceholder, FcLike } from "react-icons/fc";

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
    const addToCart = useCartStore(state => state.addToCart);
    const updateQty = useCartStore(state => state.updateQty);
    const cart = useCartStore(state => state.cart);
    const totalPrice = useCartStore(state => state.totalPrice);
    const totalItems = useCartStore(state => state.totalItems);
    console.log({ cart, totalPrice, totalItems });

    const isInBasket = cart.some(item => item.id === product.id);

    return (
        <div className="relative w-64 hover:shadow-md transition-all ease-in-out ">
            <div
                onClick={() => (product.isFavorite ? removeFromFavorite(product.id) : addToFavorite(product.id))}
                className="absolute cursor-pointer top-4 left-4"
            >
                {product.isFavorite ? <FcLike /> : <FcLikePlaceholder />}
            </div>
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
                    {/* check behse k product.id mojud has to array basket az zustand ?*/}

                    {!isInBasket ? (
                        <button
                            className="text-[10px] bg-blue-500 p-2 rounded text-white"
                            onClick={() => {
                                addToCart({
                                    id: product.id,
                                    title: product.name,
                                    description: product.description,
                                    thumbnail: product.thumbnail ?? "",
                                    price: Number(product.price),
                                });
                            }}
                        >
                            اضافه کردن به سبد خرید
                        </button>
                    ) : (
                        cart
                            .filter(item => item.id === product.id)
                            ?.map(item => (
                                <div key={item.id} className="flex items-center mt-2">
                                    <button
                                        onClick={() => updateQty("increment", item.id)}
                                        className="bg-emerald-500 px-2 rounded-lg text-primary-content"
                                    >
                                        +
                                    </button>
                                    <span className="mx-2">{item.quantity}</span>
                                    <button
                                        onClick={() => updateQty("decrement", item.id)}
                                        className="bg-red-500 aspect-square px-2 rounded-lg  text-primary-content"
                                    >
                                        {(item.quantity as number) > 1 ? "-" : <MdDelete />}
                                    </button>
                                </div>
                            ))
                    )}

                    <p className="">{product.price}</p>
                </div>
            </div>
        </div>
    );
};

export default ProductCard;
