import { Metadata } from "next";
import logoImg from "@public/logo.svg";
import logoIconImg from "@public/logo-short.svg";

// enum MODE {
//     DARK = "dark",
//     LIGHT = "light",
// }

export const siteConfig = {
    title: "Ghajari Restaurant",
    description: `Ghajari Restaurant`,
    logo: logoImg,
    icon: logoIconImg,
    mode: "light",
    // TODO: favicon
};

export const metaObject = (title?: string, description: string = siteConfig.description): Metadata => {
    return {
        title: title ? `${title}` : siteConfig.title,
        description,
    };
};

import { useEffect } from "react";
import { useRouter } from "next/router";

export const useMetadata = (title: string, description: string) => {
    const router = useRouter();

    useEffect(() => {
        document.title = title;
        const metaDescription = document.querySelector('meta[name="description"]');
        if (metaDescription) {
            metaDescription.setAttribute("content", description);
        } else {
            const meta = document.createElement("meta");
            meta.name = "description";
            meta.content = description;
            document.head.appendChild(meta);
        }
    }, [title, description, router.pathname]);
};
