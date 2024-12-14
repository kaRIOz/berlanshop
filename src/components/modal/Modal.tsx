"use client";

import React from "react";
import { Dialog, DialogOverlay, DialogContent, DialogTitle } from "@/components/ui/dialog";
import { useRouter } from "next/navigation";
const Modal = ({ children, title }: { children: React.ReactNode; title: string }) => {
    const router = useRouter();
    const handleOpenChange = () => router.back();
    return (
        <Dialog defaultOpen={true} open={true} onOpenChange={handleOpenChange}>
            <DialogOverlay className="overflow-y-hidden">
                <DialogContent className=" w-3/4 lg:w-full lg:p-2">
                    <DialogTitle className="p-2 font-medium">{title}</DialogTitle>
                    {children}
                </DialogContent>
            </DialogOverlay>
        </Dialog>
    );
};

export default Modal;
