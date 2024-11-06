import { Calendar, Home, Inbox, Search, Settings } from "lucide-react";
import React from "react";
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
import Link from "next/link";

// Menu items.
const items = [
    {
        title: "خانه",
        url: "/",
        icon: Home,
    },
    {
        title: "فروشگاه",
        url: "/shop",
        icon: Inbox,
    },
    {
        title: "دسته بندی محصولات",
        url: "/categories",
        icon: Calendar,
    },
    {
        title: "جستجو",
        url: "#",
        icon: Search,
    },
    {
        title: "پروفایل",
        url: "/dashboard",
        icon: Settings,
    },
];

export function AppSidebar() {
    return (
        <Sidebar side="right">
            <SidebarContent>
                <SidebarGroup>
                    <SidebarGroupLabel>منو</SidebarGroupLabel>
                    <SidebarGroupContent>
                        <SidebarMenu>
                            {items.map(item => (
                                <SidebarMenuItem key={item.title}>
                                    <SidebarMenuButton asChild>
                                        <Link href={item.url}>
                                            <item.icon />
                                            <span>{item.title}</span>
                                        </Link>
                                    </SidebarMenuButton>
                                </SidebarMenuItem>
                            ))}
                        </SidebarMenu>
                    </SidebarGroupContent>
                </SidebarGroup>
            </SidebarContent>
        </Sidebar>
    );
}
