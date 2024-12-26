import React from "react";

import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import AdminSidebar from "@/components/admin-dashboard/sidebar/AppSidebar";
import { auth } from "@/auth";
import { redirect } from "next/navigation";

// import Nabvar from "@/components/admin-dashboard/navbar/Navbar";
// import Sidebar from "@/components/admin-dashboard/sidebar/Sidebar";

export default async function AdminLayout({ children }: { children: React.ReactNode }) {
    const session = await auth();
    if (session?.user.role !== "admin") redirect("/");

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
}
