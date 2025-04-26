"use client";
import React, { useRef } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import Image from "next/image";

const NewestList = ({ newestProducts }) => {
    const container = useRef<HTMLDivElement>(null);

    useGSAP(() => {
        gsap.registerPlugin(ScrollTrigger);

        gsap.from(container.current, {
            scrollTrigger: {
                trigger: container.current,
                scrub: true,
                start: "top-=250px 80%",
                end: "top-=150px",
            },
            opacity: 0,
            y: -70,
        });
    });

    return (
        <div ref={container} className="flex flex-col overflow-hidden">
            <h1 className="text-center  md:mb-10 text-[calc(20px_+_1.1vw)] text-hard-blue">جدید ترین ها </h1>
            <div className="flex items-center gap-5">
                {newestProducts.slice(0, 7).map(item => (
                    <article key={item.id} className="grid grid-cols-[120px] md:grid-cols-[150px] lg:grid-cols-[180px]">
                        <div>
                            <Image
                                width={90}
                                height={180}
                                src={item.thumbnail}
                                alt={item.name}
                                className="object-cove w-full"
                            />
                            <div className="flex flex-col p-2">
                                <h2 className="font-semibold text-hard-blue">{item.name}</h2>
                                <p className="text-small font-light text-gray-400">
                                    ورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ
                                </p>
                                <div className="flex flex-col lg:justify-between items-center mt-2">
                                    <button className="text-[8px] md:text-small bg-blue-500 p-2 rounded text-white">
                                        + سبد خرید
                                    </button>
                                    <p className="text-regular md:text-medium lg:text-[16px]">{item.price}</p>
                                </div>
                            </div>
                        </div>
                    </article>
                ))}
            </div>
        </div>
    );
};

export default NewestList;
