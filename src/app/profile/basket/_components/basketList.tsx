import Image from "next/image";
import React from "react";
import { useCartStore } from "@/stores/cart.store";
import UpdateCardButton from "@/components/update-card-button/UpdateCardButton";

const BasketList = () => {
    const cart = useCartStore(state => state.cart);
    const removeFromCart = useCartStore(state => state.removeFromCart);

    return (
        <div className="flex flex-col gap-2">
            {!cart.length ? (
                <div className="flex flex-col mx-auto">
                    <Image
                        src={"/empty-cart.webp"}
                        alt="empty-cart"
                        width={100}
                        height={100}
                        className="block mx-auto"
                    />
                    <p className="text-hard-blue">سبد خرید شما خالی است</p>
                </div>
            ) : (
                cart.map(item => (
                    <div key={item.id} className="grid grid-cols-[116px_1fr] gap-x-6 gap-y-4 px-[10px] py-2  border-b">
                        <div className="flex flex-col items-center">
                            <Image
                                src={item.thumbnail}
                                alt="image"
                                width={100}
                                height={100}
                                className=" w-36 h-28 mb-2"
                            />
                        </div>

                        <div>
                            <p className="text-hard-blue">{item.title}</p>
                            <p className="w-fit text-regular text-gray-400 font-medium">{item.description}</p>
                        </div>
                        <div>
                            <UpdateCardButton id={item.id} quantity={item.quantity} />
                        </div>
                        <div className="flex items-center">
                            <div className="flex-1">
                                <p className="text-hard-blue font-semibold">{item.price}</p>
                            </div>
                            <button
                                onClick={() => removeFromCart(item.id)}
                                className="bg-light-red text-primary-content text-small px-2 py-1 m-1 rounded-sm"
                            >
                                حذف
                            </button>
                        </div>
                    </div>
                ))
            )}
        </div>
    );
};

export default BasketList;
