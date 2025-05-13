import { create } from "zustand";
import { OTPForm } from "@/app/otp/types";

interface Actions {
    setPhoneNumber: (phone: string) => void;
}

export const usePhoneStore = create<OTPForm & Actions>(set => ({
    phoneNumber: "",
    setPhoneNumber: phone => set({ phoneNumber: phone }),
}));
