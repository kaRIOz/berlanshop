import React from "react";
import { IoIosArrowBack } from "react-icons/io";
import { BiSolidCategory } from "react-icons/bi";
import { MdShoppingBag } from "react-icons/md";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import {
    SidebarGroup,
    SidebarGroupLabel,
    SidebarMenu,
    SidebarMenuButton,
    SidebarMenuItem,
    SidebarMenuSub,
    SidebarMenuSubButton,
    SidebarMenuSubItem,
} from "@/components/ui/sidebar";

import { usePathname } from "next/navigation";
import Link from "next/link";

const items = [
    {
        title: "محصولات",
        path: "/admin/products",
        icon: MdShoppingBag,
        isActive: true,
        items: [
            {
                title: "کل محصولات",
                url: "/admin/products",
            },
            {
                title: "جدید",
                url: "/admin/products/new",
            },
        ],
    },
    {
        title: "دسته بندی",
        url: "#",
        icon: BiSolidCategory,
        items: [
            {
                title: "کل دسته بندی ها",
                url: "/admin/categories",
            },
            {
                title: "جدید",
                url: "/admin/categories/new",
            },
        ],
    },
];

const SidebarCategories = () => {
    const pathname = usePathname();
    return (
        <>
            <SidebarGroupLabel className="p-0">دسته بندی و محصولات</SidebarGroupLabel>
            <SidebarMenu>
                {items.map(item => (
                    <Collapsible key={item.title} asChild className="group/collapsible">
                        <SidebarMenuItem>
                            <CollapsibleTrigger asChild dir="rtl">
                                <SidebarMenuButton tooltip={item.title}>
                                    {item.icon && <item.icon />}
                                    <span>{item.title}</span>
                                    <IoIosArrowBack className="mr-auto transition-transform duration-200 group-data-[state=open]/collapsible:-rotate-90" />
                                </SidebarMenuButton>
                            </CollapsibleTrigger>
                            <CollapsibleContent>
                                <SidebarMenuSub className="border-l-0 border-r-[1px] ">
                                    {item.items?.map(subItem => (
                                        <SidebarMenuSubItem key={subItem.title}>
                                            <SidebarMenuSubButton asChild>
                                                <Link
                                                    href={subItem.url}
                                                    className={`${pathname === subItem.url ? "bg-[#3b82f680] text-zinc-950" : ""} `}
                                                >
                                                    <span>{subItem.title}</span>
                                                </Link>
                                            </SidebarMenuSubButton>
                                        </SidebarMenuSubItem>
                                    ))}
                                </SidebarMenuSub>
                            </CollapsibleContent>
                        </SidebarMenuItem>
                    </Collapsible>
                ))}
            </SidebarMenu>
        </>
    );
};

export default SidebarCategories;
