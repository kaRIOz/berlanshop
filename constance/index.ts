type NavbarList = { id: number; title: string; link: string };

import { MdDashboard, MdSupervisedUserCircle, MdShoppingBag, MdAttachMoney, MdOutlineMessage } from "react-icons/md";
import { FaUsers } from "react-icons/fa";
import { IoMdSettings } from "react-icons/io";
import { IoExitOutline } from "react-icons/io5";

export const navBarList: NavbarList[] = [
    {
        id: 1,
        title: "خانه",
        link: "/",
    },
    {
        id: 2,
        title: "فروشگاه",
        link: "/shop",
    },
    {
        id: 3,
        title: "درباره ما",
        link: "/about-us",
    },
    {
        id: 4,
        title: "تماس با ما",
        link: "/contact",
    },
    {
        id: 5,
        title: "علاقه مندی ها",
        link: "/favorite",
    },
];

type Product = {
    id: string;
    name: string;
    price: number;
    image: string;
};

export const product: Product[] = [
    {
        id: "1",
        name: "شال مجلسی",
        price: 248000,
        image: "#",
    },
    {
        id: "2",
        name: "روسری",
        price: 198000,
        image: "#",
    },
    {
        id: "3",
        name: "مقنعه",
        price: 158000,
        image: "#",
    },
];

export const menuItems = [
    {
        title: "پنل ادمین",
        path: "/admin-dashboard",
        icon: MdDashboard,
    },
    {
        title: "سفارشات",
        path: "/admin-dashboard/orders",
        icon: MdSupervisedUserCircle,
    },
    {
        title: "محصولات",
        path: "/admin-dashboard/products",
        icon: MdShoppingBag,
    },
    {
        title: "مشتریان",
        path: "/admin-dashboard/customers",
        icon: FaUsers,
    },
    {
        title: "پیام ها",
        path: "/admin-dashboard/messages",
        icon: MdOutlineMessage,
    },
    {
        title: "تنظیمات",
        path: "/admin-dashboard/setting",
        icon: IoMdSettings,
    },
    {
        title: "خروج",
        path: "/",
        icon: IoExitOutline,
    },
];
