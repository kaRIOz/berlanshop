"use client";

import React from "react";
import { Dialog, DialogOverlay, DialogContent } from "@/components/ui/dialog";
import { useRouter } from "next/navigation";
import { Button } from "../ui/button";
import { IoClose } from "react-icons/io5";
import { DialogTitle } from "@radix-ui/react-dialog";

const UserModal = ({ children }: { children: React.ReactNode }) => {
    const router = useRouter();

    return (
        <Dialog defaultOpen={true} open={true}>
            <DialogOverlay className="overflow-y-hidden">
                <DialogContent className="w-4/5 lg:w-full p-0 rounded-md">
                    <DialogTitle className="hidden"></DialogTitle>
                    <div className="flex items-center pb-0 p-3">
                        <Button onClick={() => router.back()} variant="ghost" className="w-8 h-8 mr-auto">
                            <IoClose />
                        </Button>
                    </div>
                    {children}
                </DialogContent>
            </DialogOverlay>
        </Dialog>
    );
};

export default UserModal;
