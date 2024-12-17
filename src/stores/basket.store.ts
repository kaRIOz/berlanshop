import { create } from "zustand";
import { toast } from "@/components/ui/use-toast";

type BasketItem = {
    id: number;
    price: number;
    description: string;
    title: string;
    thumbnail: string;
    quantity?: number;
};

interface State {
    basket: BasketItem[] | [];
    totalPrice: number;
}

interface Action {
    addItem: (product: BasketItem) => void;
    deleteItem: (id: number) => void;
}

export const useBasketStore = create<State & Action>()((set, get) => ({
    basket: [],
    totalPrice: 0,
    addItem: product => {
        set(state => {
            if (!state.basket.find(basketItem => basketItem.id === product.id)) {
                return {
                    basket: [
                        ...state.basket,
                        {
                            ...product,
                            quantity: 1,
                        },
                    ],
                    totalPrice: state.totalPrice + Number(product.price),
                };
            } else {
                toast({
                    variant: "destructive",
                    title: `محصول در سبد خرید وجود دارد`,
                });
                return {
                    basket: get().basket,
                    totalPrice: state.totalPrice,
                };
            }
        });
    },

    deleteItem: id => {
        set(state => ({
            basket: state.basket.filter(item => item.id !== id),
            totalPrice: state.totalPrice - Number(state.basket.find(b => b.id === id)?.price || 0),
        }));
    },
}));

// ----------------------------------------------------------------------------------------------
