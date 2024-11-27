import React from "react";

import Nabvar from "@/components/admin-dashboard/navbar/Navbar";
import Sidebar from "@/components/admin-dashboard/sidebar/Sidebar";

const layout = ({ children }: { children: React.ReactNode }) => {
    return (
        <div className="flex">
            <div className="flex-none w-1/4 max-w-[300px]">
                <Sidebar />
            </div>
            <div className="flex-1 p-4">
                <Nabvar />
                {children}
            </div>
        </div>
    );
};

export default layout;
