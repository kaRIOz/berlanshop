"use client";

import React from "react";
import { Dialog, DialogOverlay, DialogContent } from "@/components/ui/dialog";
import { useRouter } from "next/navigation";
import { Button } from "../ui/button";
import { IoClose } from "react-icons/io5";
import { DialogTitle } from "@radix-ui/react-dialog";

const OTPModal = ({ children }: { children: React.ReactNode }) => {
    const router = useRouter();
    const handleOpenChange = () => router.back();
    return (
        <Dialog defaultOpen={true} open={true} onOpenChange={handleOpenChange}>
            <DialogOverlay className="overflow-y-hidden ">
                <DialogContent className="w-3/4 lg:w-full p-4 lg:p-2 rounded-md">
                    <Button onClick={() => router.push("/")} variant="ghost" className="w-8 h-8 mr-auto">
                        <IoClose />
                    </Button>
                    <DialogTitle></DialogTitle>
                    {children}
                </DialogContent>
            </DialogOverlay>
        </Dialog>
    );
};

export default OTPModal;
