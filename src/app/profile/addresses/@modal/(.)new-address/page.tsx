"use client";

import React from "react";
import dynamic from "next/dynamic";
import UserModal from "@/components/user-modal/UserModal";
import { Input } from "@/components/ui/input";

const Map = dynamic(() => import("../../../../../components/map/mapContainer"), { ssr: false });

const newAddress = () => {
    return (
        <UserModal>
            <div className="relative">
                <Map />
            </div>
        </UserModal>
    );
};

export default newAddress;
