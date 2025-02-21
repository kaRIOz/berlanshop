"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";

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
import SidebarCategories from "./SidebarCategories/SidebarCategories";
import TopMenu from "./TopMenu";
import DownMenu from "./SidebarCategories/DownMenu";

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
                            <TopMenu />
                            <SidebarCategories />
                            <DownMenu />
                        </SidebarGroup>
                    </SidebarGroupContent>
                </SidebarGroup>
            </SidebarContent>
        </Sidebar>
    );
};

export default AdminSidebar;
