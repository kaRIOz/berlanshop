"use client";

import { useBasketStore } from "@/store/basket.store";
import Image from "next/image";
import React from "react";

const Basket = () => {
    const basket = useBasketStore(state => state.basket);
    const deleteItem = useBasketStore(state => state.deleteItem);

    return (
        <div>
            {!basket.length ? (
                <h1 className="text-center opacity-50">basket is empty</h1>
            ) : (
                basket.map(item => (
                    <div key={item.id} className="flex items-center">
                        <Image src={item.thumbnail} alt="image" width={50} height={50} />
                        <h1>{item.title}</h1>
                        <h1>{item.price}</h1>
                        <button onClick={() => deleteItem(item.id)}>حذف</button>
                    </div>
                ))
            )}
        </div>
    );
};

export default Basket;
