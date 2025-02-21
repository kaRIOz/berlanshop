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
}
