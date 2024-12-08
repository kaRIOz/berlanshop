import React from "react";

import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import AdminSidebar from "@/components/admin-dashboard/sidebar/AppSidebar";

// import Nabvar from "@/components/admin-dashboard/navbar/Navbar";
// import Sidebar from "@/components/admin-dashboard/sidebar/Sidebar";

const layout = ({ children }: { children: React.ReactNode }) => {
    return (
        <SidebarProvider>
            <div className="grid grid-cols-[auto,1fr] w-full scrollbar">
                <AdminSidebar />

                <main className="flex flex-col overflow-auto m-2 bg-primary-content border  p-3 rounded-lg">
                    <SidebarTrigger />
                    {children}
                </main>
            </div>
        </SidebarProvider>
    );
};

export default layout;
