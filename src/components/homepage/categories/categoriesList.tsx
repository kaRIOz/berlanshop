"use client";

import React, { useRef } from "react";
import Image from "next/image";

import { ScrollTrigger } from "gsap/ScrollTrigger";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

const CategoryList = ({ category }) => {
    const container = useRef<HTMLDivElement>(null);

    // useGSAP(() => {
    //     gsap.registerPlugin(ScrollTrigger);

    //     gsap.to(container.current, {
    //         scrollTrigger: {
    //             trigger: container.current,
    //             scrub: true,
    //             start: "top+=70%",
    //             end: "+=300px",
    //         },
    //         y: -150,
    //         opacity: 0,
    //     });
    // });

    return (
        <article key={category.nameEn} className="break-inside-avoid">
            <Image
                src={category.thumbnail}
                alt="category"
                width={100}
                height={100}
                className="w-full object-cover rounded mb-4"
            />
            <h2 className="absolute bottom-3 left-3 text-white text-[12px] md:text-[20px]">{category.nameFa}</h2>
        </article>
    );
};

export default CategoryList;
