import React from "react";

import { useCartStore } from "@/stores/cart.store";

import { MdDelete } from "react-icons/md";
import { HiPlusSmall, HiMinusSmall } from "react-icons/hi2";

type UpdateCardButton = {
    id: number;
    quantity?: number;
};

const UpdateCardButton = ({ id, quantity }: UpdateCardButton) => {
    const updateQty = useCartStore(state => state.updateQty);

    return (
        <div className="w-full flex justify-center items-center gap-x-2">
            <button onClick={() => updateQty("increment", id)} className="border rounded-full text-xl p-1">
                <HiPlusSmall className="text-emerald-500 " />
            </button>
            <span className="text-medium">{quantity}</span>

            <button onClick={() => updateQty("decrement", id)} className="border rounded-full text-xl p-1">
                {(quantity as number) > 1 ? (
                    <HiMinusSmall className="text-red-500 " />
                ) : (
                    <MdDelete className="text-red-500 text-lg" />
                )}
            </button>
        </div>
    );
};

export default UpdateCardButton;
