import { SidebarMenu, SidebarMenuButton, SidebarMenuItem } from "@/components/ui/sidebar";
import Link from "next/link";
import React from "react";

import { downMenu } from "$/constants";
import { usePathname } from "next/navigation";

const DownMenu = () => {
    const pathname = usePathname();
    return (
        <SidebarMenu>
            {downMenu.map(item => (
                <SidebarMenuItem key={item.title}>
                    <Link
                        href={item.path}
                        className={`flex items-center gap-2 ${pathname === item.path ? "bg-[#3b82f680] text-black" : ""} rounded-lg`}
                    >
                        <SidebarMenuButton tooltip={item.title}>
                            {<item.icon />}
                            <p>{item.title}</p>
                        </SidebarMenuButton>
                    </Link>
                </SidebarMenuItem>
            ))}
        </SidebarMenu>
    );
};
export default DownMenu;
