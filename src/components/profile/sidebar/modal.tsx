"use client";

import React from "react";
import { Dialog, DialogOverlay, DialogContent, DialogTitle } from "@/components/ui/dialog";
import { useRouter } from "next/navigation";
const UserModal = ({ children }: { children: React.ReactNode }) => {
    const router = useRouter();
    const handleOpenChange = () => router.back();
    return (
        <Dialog defaultOpen={true} open={true} onOpenChange={handleOpenChange}>
            <DialogOverlay className="overflow-y-hidden">
                <DialogContent>
                    <DialogTitle></DialogTitle>
                    {children}
                </DialogContent>
            </DialogOverlay>
        </Dialog>
    );
};

export default UserModal;
