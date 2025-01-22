import React from "react";

import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import AdminSidebar from "@/components/admin-dashboard/sidebar/AppSidebar";

// import Nabvar from "@/components/admin-dashboard/navbar/Navbar";
// import Sidebar from "@/components/admin-dashboard/sidebar/Sidebar";

const layout = ({ children }: { children: React.ReactNode }) => {
    return (
        <SidebarProvider>
            <AdminSidebar />

            <main className="w-full m-2 bg-primary-content border  p-3 rounded-lg">
                <div className="flex items-center gap-2">
                    <SidebarTrigger />
                    <h2>داشبورد ادمین</h2>
                </div>
                {children}
            </main>
        </SidebarProvider>
    );
};

export default layout;
