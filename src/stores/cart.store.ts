/* eslint-disable no-unused-vars */
import { create } from "zustand";

export type Product = {
    id: number;
    price: number;
    description: string;
    title: string;
    thumbnail: string;
    quantity?: number;
};

interface State {
    cart: Product[];
    totalItems: number;
    totalPrice: number;
}

interface Actions {
    addToCart: (Item: Product) => void;
    removeFromCart: (id: number) => void;
    updateQty: (type: "increment" | "decrement", id: number) => void;
}

const INITIAL_STATE: State = {
    cart: [],
    totalItems: 0,
    totalPrice: 0,
};

export const useCartStore = create<State & Actions>((set, get) => ({
    cart: INITIAL_STATE.cart,
    totalItems: INITIAL_STATE.totalItems,
    totalPrice: INITIAL_STATE.totalPrice,
    addToCart: (product: Product) => {
        const cart = get().cart;
        const Product = cart.find(item => item.id === product.id);

        if (Product) {
            const updatedCart = cart.map(item =>
                item.id === product.id ? { ...item, quantity: (item.quantity as number) + 1 } : item,
            );
            set(state => ({
                cart: updatedCart,
                totalItems: state.totalItems + 1,
                totalPrice: state.totalPrice + product.price,
            }));
        } else {
            const updatedCart = [...cart, { ...product, quantity: 1 }];

            set(state => ({
                cart: updatedCart,
                totalItems: state.totalItems + 1,
                totalPrice: state.totalPrice + product.price,
            }));
        }
    },
    removeFromCart: (id: number) => {
        set(state => {
            const itemToRemove = state.cart.find(item => item.id === id);
            if (itemToRemove) {
                const updatedCart = state.cart.filter(item => item.id !== id);
                // Update totalItems
                const newTotalItems = Math.max(0, state.totalItems - (itemToRemove.quantity || 1));

                // Update totalPrice
                const newTotalPrice = state.totalPrice - itemToRemove.price * (itemToRemove.quantity || 1);
                return {
                    cart: updatedCart,
                    totalItems: newTotalItems,
                    totalPrice: newTotalPrice,
                };
            } else {
                return state;
            }
        });
    },

    updateQty: (type, id) => {
        const cart = get().cart.find(item => item.id === id);
        console.log({ cart, type });

        if (!cart) return;

        if (cart.quantity === 1 && type === "decrement") {
            get().removeFromCart(id);
        }
        if (typeof cart.quantity === "number") {
            cart.quantity = type === "increment" ? cart.quantity + 1 : cart?.quantity - 1;

            set({
                cart: [...get().cart],
                totalPrice: get().cart.reduce((total, item) => {
                    const itemQuantity = item.quantity ?? 0;
                    return total + itemQuantity * item.price;
                }, 0),
                totalItems: get().cart.reduce((total, item) => total + (item.quantity ?? 0), 0),
            });
        }
    },
}));
