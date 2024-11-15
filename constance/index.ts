type NavbarList = { id: number; title: string; link: string };

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
        link: "contact",
    },
    {
        id: 5,
        title: "علاقه مندی ها",
        link: "/blog",
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
