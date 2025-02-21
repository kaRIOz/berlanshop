"use client";
import React from "react";

import dynamic from "next/dynamic";
import UserModal from "@/components/user-modal/UserModal";

const Map = dynamic(() => import("../../../../components/map/mapContainer"), { ssr: false });

const newAddress = () => {
    return (
        <div className="relative">
            <Map />
        </div>
    );
};

export default newAddress;
