"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";

import { menuItems } from "$/constants";

import {
    Sidebar,
    SidebarContent,
    SidebarGroup,
    SidebarGroupContent,
    SidebarGroupLabel,
    SidebarMenu,
    SidebarMenuButton,
    SidebarMenuItem,
} from "@/components/ui/sidebar";

const AdminSidebar = ({ ...props }: React.ComponentProps<typeof Sidebar>) => {
    const pathname = usePathname();

    return (
        <Sidebar variant="floating" side="right" collapsible="icon" {...props}>
            <SidebarContent className="bg-primary-content rounded-lg">
                <SidebarGroup>
                    <SidebarGroupLabel className="flex justify-between items-center my-5 ">
                        <Image
                            src={
                                "https://img.freepik.com/free-vector/isolated-young-handsome-man-different-poses-white-background-illustration_632498-859.jpg?ga=GA1.1.478491927.1732568556&semt=ais_hybrid"
                            }
                            alt="admin-avatar"
                            width={50}
                            height={50}
                            className="mix-blend-multiply"
                        />
                        <div>
                            <p className="text-medium font-semibold">ایمان</p>
                            <span className="text-small">ادمین</span>
                        </div>
                    </SidebarGroupLabel>
                    <SidebarGroupContent>
                        <SidebarGroup className="p-0">
                            <SidebarGroupLabel className="mb-2">منوی ادمین</SidebarGroupLabel>
                            <SidebarMenu>
                                {menuItems.map(item => (
                                    <SidebarMenuItem key={item.title}>
                                        <Link
                                            href={item.path}
                                            className={`flex items-center gap-2 ${pathname === item.path ? "bg-slate-200" : "text-black"} rounded-lg`}
                                        >
                                            <SidebarMenuButton tooltip={item.title}>
                                                {<item.icon />}
                                                <p>{item.title}</p>
                                            </SidebarMenuButton>
                                        </Link>
                                    </SidebarMenuItem>
                                ))}
                            </SidebarMenu>
                        </SidebarGroup>
                    </SidebarGroupContent>
                </SidebarGroup>
            </SidebarContent>
        </Sidebar>
    );
};

export default AdminSidebar;
